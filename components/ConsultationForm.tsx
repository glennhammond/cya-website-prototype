"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ErrorSummary, type FormError } from "@/components/ErrorSummary";
import { useAnnotation } from "@/lib/annotation";
import {
  ATTRIBUTION_STORAGE_KEY,
  PENDING_LEAD_STORAGE_KEY,
  type AttributionData,
} from "@/lib/attribution";
import {
  interestOptions,
  timeframeOptions,
} from "@/content/consultation";

interface FormState {
  firstName: string;
  workEmail: string;
  organisation: string;
  locations: string;
  interest: string;
  timeframe: string;
  context: string;
  privacyConsent: boolean;
  website: string;
}

const initialState: FormState = {
  firstName: "",
  workEmail: "",
  organisation: "",
  locations: "",
  interest: "",
  timeframe: "",
  context: "",
  privacyConsent: false,
  website: "",
};

type Status = "idle" | "submitting" | "failure";

// Matches the authorised HubSpot planning form: name, work email and the
// intended outcome are the only enquiry details required by the website.
const REQUIRED_FIELDS: { key: keyof FormState; id: string; message: string }[] = [
  { key: "firstName", id: "firstName", message: "Enter your first name" },
  { key: "workEmail", id: "workEmail", message: "Enter a work email address" },
  { key: "context", id: "context", message: "Tell us what you are trying to make happen" },
  { key: "privacyConsent", id: "privacyConsent", message: "Accept the privacy acknowledgement to continue" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ConsultationForm({ initialInterest }: { initialInterest?: string }) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    interest: initialInterest && interestOptions.some((o) => o.value === initialInterest) ? initialInterest : "",
  });
  const [errors, setErrors] = useState<FormError[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const { enabled: annotateEnabled } = useAnnotation();
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errors.length > 0) {
      errorSummaryRef.current?.focus();
    }
  }, [errors]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FormError[] {
    const found: FormError[] = [];
    for (const field of REQUIRED_FIELDS) {
      const value = values[field.key];
      if (typeof value === "boolean" ? !value : !value.trim()) {
        found.push({ id: field.id, message: field.message });
      }
    }
    if (!found.some((e) => e.id === "workEmail") && !EMAIL_PATTERN.test(values.workEmail)) {
      found.push({ id: "workEmail", message: "Enter a work email address in a valid format" });
    }
    return found;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (found.length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    let attribution: AttributionData = {};
    try {
      attribution = JSON.parse(
        window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}",
      ) as AttributionData;
    } catch {
      attribution = {};
    }

    const hubspotutk = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("hubspotutk="))
      ?.split("=")
      .slice(1)
      .join("=");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: window.location.href,
          referrer: document.referrer,
          hubspotutk,
          attribution,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        successRoute?: string;
        submissionId?: string;
      };
      if (!response.ok || !result.ok || !result.successRoute) throw new Error("submission failed");

      window.sessionStorage.setItem(
        PENDING_LEAD_STORAGE_KEY,
        JSON.stringify({ successRoute: result.successRoute, submissionId: result.submissionId }),
      );
      window.location.assign(result.successRoute);
    } catch {
      setStatus("failure");
    }
  }

  if (status === "failure") {
    return (
      <div role="alert" className="rounded-[var(--radius-card)] border-2 border-error bg-white p-8">
        <h2 className="text-2xl text-error">Your enquiry didn&rsquo;t go through.</h2>
        <p className="mt-3 text-base leading-relaxed text-body">
          Something went wrong submitting this form. Your details have not been lost - please try again, or reach
          CYA directly while this is investigated.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="min-h-12 rounded-[18px] bg-gold px-6 text-[15px] font-bold text-white hover:bg-[var(--cya-gold-hover)]"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <ErrorSummary errors={errors} ref={errorSummaryRef} />

      {annotateEnabled && (
        <p className="mb-6 rounded-[var(--radius-control)] bg-mist p-3 text-xs text-body">
          Production integration: successful validated submissions are sent to the authorised HubSpot form and
          then routed to the applicable thank-you page.
        </p>
      )}

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Your details</legend>
        <TextField id="firstName" label="First name" required value={values.firstName} onChange={(v) => update("firstName", v)} errors={errors} autoComplete="given-name" />
        <TextField id="workEmail" label="Work email" required type="email" value={values.workEmail} onChange={(v) => update("workEmail", v)} errors={errors} autoComplete="email" />
        <TextField id="organisation" label="Organisation (optional)" value={values.organisation} onChange={(v) => update("organisation", v)} errors={errors} autoComplete="organization" className="sm:col-span-2" />
      </fieldset>

      <fieldset className="mt-6 grid gap-5">
        <legend className="sr-only">Planning context</legend>
        <TextAreaField
          id="context"
          label="What are you trying to make happen?"
          required
          value={values.context}
          onChange={(v) => update("context", v)}
          errors={errors}
          helpText="A sentence or two is enough. Please don't include health, medical or other sensitive personal information."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField id="locations" label="Where will it happen? (optional)" value={values.locations} onChange={(v) => update("locations", v)} errors={errors} placeholder="e.g. Brisbane, Sydney or online" />
          <SelectField id="timeframe" label="When is this for? (optional)" value={values.timeframe} onChange={(v) => update("timeframe", v)} errors={errors} options={timeframeOptions} />
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-3 border-t border-divider pt-6">
        <legend className="sr-only">Consent</legend>
        <label htmlFor="privacyConsent" className="flex items-start gap-3 text-sm text-body">
          <input
            id="privacyConsent"
            type="checkbox"
            checked={values.privacyConsent}
            onChange={(e: ChangeEvent<HTMLInputElement>) => update("privacyConsent", e.target.checked)}
            aria-describedby={errors.some((e) => e.id === "privacyConsent") ? "privacyConsent-error" : undefined}
            className="mt-1 h-4 w-4"
          />
          <span>
            I understand CYA will process this enquiry in line with its privacy policy. <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.some((e) => e.id === "privacyConsent") && (
          <p id="privacyConsent-error" className="pl-7 text-sm font-semibold text-error">
            Accept the privacy acknowledgement to continue
          </p>
        )}
      </fieldset>

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] bg-gold px-8 text-[15px] font-bold text-white transition-colors hover:bg-[var(--cya-gold-hover)] disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending your enquiry…" : "Send your enquiry"}
        </button>
        <span aria-live="polite" className="text-sm text-body">
          {status === "submitting" ? "Submitting, please wait." : ""}
        </span>
      </div>
    </form>
  );
}

function fieldError(errors: FormError[], id: string) {
  return errors.find((e) => e.id === id)?.message;
}

function TextField({
  id,
  label,
  value,
  onChange,
  errors,
  required,
  type = "text",
  autoComplete,
  placeholder,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  errors: FormError[];
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  const error = fieldError(errors, id);
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`min-h-12 w-full rounded-[var(--radius-control)] border bg-white px-4 text-base text-ink ${error ? "border-error" : "border-divider"}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  errors,
  required,
  options,
  valueMap,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  errors: FormError[];
  required?: boolean;
  options: string[];
  valueMap?: { value: string; label: string }[];
}) {
  const error = fieldError(errors, id);
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`min-h-12 w-full rounded-[var(--radius-control)] border bg-white px-4 text-base text-ink ${error ? "border-error" : "border-divider"}`}
      >
        <option value="">Select an option</option>
        {valueMap
          ? valueMap.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  helpText,
  required,
  errors,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
  required?: boolean;
  errors?: FormError[];
}) {
  const error = errors ? fieldError(errors, id) : undefined;
  const describedBy = [helpText ? `${id}-help` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {helpText && (
        <p id={`${id}-help`} className="mb-1.5 text-sm text-body">
          {helpText}
        </p>
      )}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        rows={4}
        className={`w-full rounded-[var(--radius-control)] border bg-white px-4 py-3 text-base text-ink ${error ? "border-error" : "border-divider"}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}
