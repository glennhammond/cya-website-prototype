"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ErrorSummary, type FormError } from "@/components/ErrorSummary";
import { useAnnotation } from "@/lib/annotation";
import { responseCommitment } from "@/content/site";
import {
  interestOptions,
  workforceBands,
  timeframeOptions,
  deliveryModes,
} from "@/content/consultation";

interface FormState {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  organisation: string;
  role: string;
  workforce: string;
  locations: string;
  interest: string;
  timeframe: string;
  deliveryMode: string;
  context: string;
  procurement: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phone: "",
  organisation: "",
  role: "",
  workforce: "",
  locations: "",
  interest: "",
  timeframe: "",
  deliveryMode: "",
  context: "",
  procurement: "",
  privacyConsent: false,
  marketingConsent: false,
};

type Status = "idle" | "submitting" | "success" | "duplicate" | "failure";

const REQUIRED_FIELDS: { key: keyof FormState; id: string; message: string }[] = [
  { key: "firstName", id: "firstName", message: "Enter your first name" },
  { key: "lastName", id: "lastName", message: "Enter your last name" },
  { key: "workEmail", id: "workEmail", message: "Enter a work email address" },
  { key: "organisation", id: "organisation", message: "Enter your organisation" },
  { key: "role", id: "role", message: "Enter your role" },
  { key: "workforce", id: "workforce", message: "Select an approximate workforce size" },
  { key: "locations", id: "locations", message: "Tell us your primary location(s)" },
  { key: "interest", id: "interest", message: "Select what you are considering" },
  { key: "timeframe", id: "timeframe", message: "Select a preferred timeframe" },
  { key: "deliveryMode", id: "deliveryMode", message: "Select a delivery mode" },
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (found.length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => {
      const email = values.workEmail.toLowerCase();
      if (email.includes("duplicate")) {
        setStatus("duplicate");
      } else if (email.includes("fail")) {
        setStatus("failure");
      } else {
        setStatus("success");
      }
    }, 900);
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-divider bg-white p-8">
        <h2 className="text-2xl text-teal-dark">Thanks, {values.firstName}.</h2>
        <p className="mt-3 text-base leading-relaxed text-body">
          Your enquiry about &ldquo;{interestOptions.find((o) => o.value === values.interest)?.label.toLowerCase() ?? "your wellbeing needs"}&rdquo; has
          been received. {responseCommitment.value}
        </p>
        <p className="mt-3 text-sm text-body">
          We will follow up at <strong>{values.workEmail}</strong>
          {values.phone ? ` or ${values.phone}` : ""}.
        </p>
        <p className="mt-6 text-xs text-body/70">
          Prototype boundary: this form does not send data anywhere yet. In production this step hands off to
          HubSpot with source page, campaign and enquiry-type attribution.
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-divider bg-white p-8">
        <h2 className="text-2xl text-teal-dark">We already have an enquiry from you.</h2>
        <p className="mt-3 text-base leading-relaxed text-body">
          It looks like {values.workEmail} has an open enquiry with CYA already. We have not created a duplicate
          record — someone will be in touch using the details already on file.
        </p>
        <p className="mt-3 text-base leading-relaxed text-body">
          If new detail has come up since then, you&rsquo;re welcome to add it now.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 min-h-11 rounded-[var(--radius-control)] border border-teal px-5 text-sm font-bold text-teal-dark hover:bg-mist"
        >
          Add updated detail
        </button>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div role="alert" className="rounded-[var(--radius-card)] border-2 border-error bg-white p-8">
        <h2 className="text-2xl text-error">Your enquiry didn&rsquo;t go through.</h2>
        <p className="mt-3 text-base leading-relaxed text-body">
          Something went wrong submitting this form. Your details have not been lost — please try again, or reach
          CYA directly while this is investigated.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="min-h-11 rounded-[var(--radius-control)] bg-gold px-5 text-sm font-bold text-teal-dark"
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
          Testing hint (annotation mode only): a work email containing &ldquo;duplicate&rdquo; previews the
          duplicate-guidance state; one containing &ldquo;fail&rdquo; previews the system-failure state.
        </p>
      )}

      <fieldset className="grid gap-6 sm:grid-cols-2">
        <legend className="sr-only">Your details</legend>
        <TextField id="firstName" label="First name" required value={values.firstName} onChange={(v) => update("firstName", v)} errors={errors} autoComplete="given-name" />
        <TextField id="lastName" label="Last name" required value={values.lastName} onChange={(v) => update("lastName", v)} errors={errors} autoComplete="family-name" />
        <TextField id="workEmail" label="Work email" required type="email" value={values.workEmail} onChange={(v) => update("workEmail", v)} errors={errors} autoComplete="email" />
        <TextField id="phone" label="Phone (optional)" type="tel" value={values.phone} onChange={(v) => update("phone", v)} errors={errors} autoComplete="tel" />
        <TextField id="organisation" label="Organisation" required value={values.organisation} onChange={(v) => update("organisation", v)} errors={errors} autoComplete="organization" />
        <TextField id="role" label="Your role" required value={values.role} onChange={(v) => update("role", v)} errors={errors} />
      </fieldset>

      <fieldset className="mt-8 grid gap-6 sm:grid-cols-2">
        <legend className="sr-only">Organisation context</legend>
        <SelectField id="workforce" label="Approximate workforce size" required value={values.workforce} onChange={(v) => update("workforce", v)} errors={errors} options={workforceBands} />
        <TextField id="locations" label="Primary location(s)" required value={values.locations} onChange={(v) => update("locations", v)} errors={errors} placeholder="e.g. Brisbane and Sydney" />
        <SelectField id="interest" label="What are you considering?" required value={values.interest} onChange={(v) => update("interest", v)} errors={errors} options={interestOptions.map((o) => o.label)} valueMap={interestOptions} />
        <SelectField id="timeframe" label="Preferred timeframe" required value={values.timeframe} onChange={(v) => update("timeframe", v)} errors={errors} options={timeframeOptions} />
      </fieldset>

      <fieldset className="mt-8">
        <legend className="mb-3 text-sm font-bold text-teal-dark" id="deliveryMode-legend">
          Delivery mode <span aria-hidden="true">*</span>
        </legend>
        <div id="deliveryMode" className="flex flex-wrap gap-3" role="radiogroup" aria-labelledby="deliveryMode-legend" aria-describedby={errors.some((e) => e.id === "deliveryMode") ? "deliveryMode-error" : undefined}>
          {deliveryModes.map((mode) => (
            <label
              key={mode}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-divider bg-white px-4 py-2 text-sm has-[:checked]:border-teal has-[:checked]:bg-mist"
            >
              <input
                type="radio"
                name="deliveryMode"
                value={mode}
                checked={values.deliveryMode === mode}
                onChange={() => update("deliveryMode", mode)}
                className="h-4 w-4"
              />
              {mode}
            </label>
          ))}
        </div>
        {errors.some((e) => e.id === "deliveryMode") && (
          <p id="deliveryMode-error" className="mt-2 text-sm font-semibold text-error">
            Select a delivery mode
          </p>
        )}
      </fieldset>

      <div className="mt-8 grid gap-6">
        <TextAreaField
          id="context"
          label="Context and priorities (optional)"
          value={values.context}
          onChange={(v) => update("context", v)}
          helpText="Please don't include health, medical or other sensitive personal information here."
        />
        <TextAreaField
          id="procurement"
          label="Procurement constraints (optional)"
          value={values.procurement}
          onChange={(v) => update("procurement", v)}
        />
      </div>

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
        <label htmlFor="marketingConsent" className="flex items-start gap-3 text-sm text-body">
          <input
            id="marketingConsent"
            type="checkbox"
            checked={values.marketingConsent}
            onChange={(e: ChangeEvent<HTMLInputElement>) => update("marketingConsent", e.target.checked)}
            className="mt-1 h-4 w-4"
          />
          <span>I&rsquo;m happy to receive occasional wellbeing planning content from CYA (optional).</span>
        </label>
      </fieldset>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] bg-gold px-8 text-[15px] font-bold text-teal-dark transition-opacity disabled:opacity-60"
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
}) {
  const error = fieldError(errors, id);
  return (
    <div>
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">
        {label}
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
        aria-describedby={helpText ? `${id}-help` : undefined}
        rows={4}
        className="w-full rounded-[var(--radius-control)] border border-divider bg-white px-4 py-3 text-base text-ink"
      />
    </div>
  );
}
