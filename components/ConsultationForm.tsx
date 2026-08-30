"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ErrorSummary, type FormError } from "@/components/ErrorSummary";
import { useAnnotation } from "@/lib/annotation";
import { readAnalyticsConsent } from "@/lib/analytics-consent";
import { ATTRIBUTION_STORAGE_KEY, type AttributionData } from "@/lib/attribution";
import { interestOptions, timeframeOptions } from "@/content/consultation";

interface FormState {
  name: string;
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
  name: "",
  workEmail: "",
  organisation: "",
  locations: "",
  interest: "",
  timeframe: "",
  context: "",
  privacyConsent: false,
  website: "",
};

type Status = "idle" | "submitting" | "success" | "failure";

const REQUIRED_FIELDS: { key: keyof FormState; id: string; message: string }[] = [
  { key: "name", id: "name", message: "Enter your name" },
  { key: "workEmail", id: "workEmail", message: "Enter a work email address" },
  { key: "context", id: "context", message: "Tell us what you are trying to make happen" },
  { key: "privacyConsent", id: "privacyConsent", message: "Accept the privacy acknowledgement to continue" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function signalValidatedLead(submissionId?: string) {
  if (readAnalyticsConsent() !== "granted") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "cya_lead_submission",
      form_id: "746ef219-510f-4faa-a7a3-40288155d936",
      submission_id: submissionId,
      source: "start_planning",
    });
  } catch {
    // Analytics must never alter the enquiry result.
  }
}

function safePageAddress() {
  return `${window.location.origin}${window.location.pathname}`.slice(0, 2000);
}

function safeReferrer() {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return `${referrer.origin}${referrer.pathname}`.slice(0, 2000);
  } catch {
    return "";
  }
}

export function ConsultationForm({
  initialInterest,
  submissionEnabled,
}: {
  initialInterest?: string;
  submissionEnabled: boolean;
}) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    interest: initialInterest && interestOptions.some((o) => o.value === initialInterest) ? initialInterest : "",
  });
  const [errors, setErrors] = useState<FormError[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const { enabled: annotateEnabled } = useAnnotation();
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errors.length > 0) errorSummaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

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
    if (!submissionEnabled) return;

    const found = validate();
    setErrors(found);
    if (found.length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    let attribution: AttributionData = {};
    if (readAnalyticsConsent() === "granted") {
      try {
        attribution = JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}") as AttributionData;
      } catch {
        attribution = {};
      }
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: safePageAddress(),
          referrer: safeReferrer(),
          attribution,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        submissionId?: string;
        conversionEligible?: boolean;
      };
      if (!response.ok || !result.ok) throw new Error("submission failed");

      if (result.conversionEligible) signalValidatedLead(result.submissionId);
      setErrors([]);
      setStatus("success");
    } catch {
      setStatus("failure");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border-l-4 border-[var(--cya-ochre)] bg-white py-3 pl-6 focus:outline-none">
        <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Thanks — we’ve received your enquiry</h2>
        <p className="mt-3 text-base leading-7 text-[var(--cya-body)]">CYA will review what you have shared and respond within two business days using the details provided.</p>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div role="alert" className="rounded-[var(--radius-card)] border-2 border-error bg-white p-8">
        <h2 className="text-2xl text-error">Your enquiry didn&rsquo;t go through</h2>
        <p className="mt-3 text-base leading-relaxed text-body">Something went wrong submitting this form. Please try again, call CYA on 1300 373 363 or email info@corporateyoga.com.au.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={() => setStatus("idle")} className="min-h-12 rounded-[4px] bg-[var(--cya-action-primary-bg)] px-6 text-[15px] font-bold text-[var(--cya-action-primary-text)] hover:bg-[var(--cya-teal-dark)]">Try again</button>
          <a href="tel:1300373363" className="inline-flex min-h-12 items-center text-sm font-bold text-teal underline underline-offset-4">Call 1300 373 363</a>
          <a href="mailto:info@corporateyoga.com.au" className="inline-flex min-h-12 items-center text-sm font-bold text-teal underline underline-offset-4">Email CYA</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <ErrorSummary errors={errors} ref={errorSummaryRef} />

      {annotateEnabled && (
        <p className="mb-6 rounded-[var(--radius-control)] bg-mist p-3 text-xs text-body">Release integration: a validated submission is sent to the authorised HubSpot planning form only when the deployment enquiry gate is enabled.</p>
      )}

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
      </div>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Your details</legend>
        <TextField id="name" label="Your name" required value={values.name} onChange={(v) => update("name", v)} errors={errors} autoComplete="name" />
        <TextField id="workEmail" label="Work email" required type="email" value={values.workEmail} onChange={(v) => update("workEmail", v)} errors={errors} autoComplete="email" />
        <TextField id="organisation" label="Organisation (optional)" value={values.organisation} onChange={(v) => update("organisation", v)} errors={errors} autoComplete="organization" className="sm:col-span-2" />
      </fieldset>

      <fieldset className="mt-6 grid gap-5">
        <legend className="sr-only">Planning context</legend>
        <TextAreaField id="context" label="What are you trying to make happen?" required value={values.context} onChange={(v) => update("context", v)} errors={errors} helpText="A sentence or two is enough. Please don't include health, medical or other sensitive personal information." />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField id="locations" label="Where will it happen? (optional)" value={values.locations} onChange={(v) => update("locations", v)} errors={errors} placeholder="e.g. Brisbane, Sydney or online" />
          <SelectField id="timeframe" label="When is this for? (optional)" value={values.timeframe} onChange={(v) => update("timeframe", v)} errors={errors} options={timeframeOptions} />
        </div>
      </fieldset>

      <fieldset className="mt-8 space-y-3 border-t border-divider pt-6">
        <legend className="sr-only">Privacy acknowledgement</legend>
        <label htmlFor="privacyConsent" className="flex items-start gap-3 text-sm text-body">
          <input id="privacyConsent" type="checkbox" checked={values.privacyConsent} onChange={(e: ChangeEvent<HTMLInputElement>) => update("privacyConsent", e.target.checked)} aria-describedby={errors.some((e) => e.id === "privacyConsent") ? "privacyConsent-error" : undefined} className="mt-1 h-4 w-4" />
          <span>Corporate Yoga Australia uses the information you provide here to respond to and manage your workplace wellbeing enquiry. Submitting this form does not subscribe you to marketing communications. See our{" "}<Link className="font-semibold underline underline-offset-4" href="/privacy-policy">Privacy Policy</Link>{" "}for how we handle personal information. <span aria-hidden="true">*</span></span>
        </label>
        {errors.some((e) => e.id === "privacyConsent") && <p id="privacyConsent-error" className="pl-7 text-sm font-semibold text-error">Accept the privacy acknowledgement to continue</p>}
      </fieldset>

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button type="submit" disabled={!submissionEnabled || status === "submitting"} aria-describedby={!submissionEnabled ? "enquiry-release-status" : undefined} className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] bg-[var(--cya-action-primary-bg)] px-8 text-[15px] font-bold text-[var(--cya-action-primary-text)] transition-colors hover:bg-[var(--cya-teal-dark)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{status === "submitting" ? "Sending your enquiry…" : "Send your enquiry"}</button>
        <span aria-live="polite" className="text-sm text-body">{status === "submitting" ? "Submitting, please wait." : ""}</span>
      </div>
      {!submissionEnabled ? <p id="enquiry-release-status" className="mt-3 max-w-2xl text-sm leading-6 text-[var(--cya-body)]">Online submission is not yet enabled on this pre-launch build. You can still call CYA on 1300 373 363 or email info@corporateyoga.com.au.</p> : null}
    </form>
  );
}

function fieldError(errors: FormError[], id: string) {
  return errors.find((e) => e.id === id)?.message;
}

function TextField({ id, label, value, onChange, errors, required, type = "text", autoComplete, placeholder, className = "" }: { id: string; label: string; value: string; onChange: (value: string) => void; errors: FormError[]; required?: boolean; type?: string; autoComplete?: string; placeholder?: string; className?: string; }) {
  const error = fieldError(errors, id);
  return <div className={className}><label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">{label} {required && <span aria-hidden="true">*</span>}</label><input id={id} name={id} type={type} value={value} placeholder={placeholder} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} aria-required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={`min-h-12 w-full rounded-[var(--radius-control)] border bg-white px-4 text-base text-ink ${error ? "border-error" : "border-divider"}`} />{error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">{error}</p>}</div>;
}

function SelectField({ id, label, value, onChange, errors, required, options }: { id: string; label: string; value: string; onChange: (value: string) => void; errors: FormError[]; required?: boolean; options: string[]; }) {
  const error = fieldError(errors, id);
  return <div><label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">{label} {required && <span aria-hidden="true">*</span>}</label><select id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} aria-required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={`min-h-12 w-full rounded-[var(--radius-control)] border bg-white px-4 text-base text-ink ${error ? "border-error" : "border-divider"}`}><option value="">Select an option</option>{options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</select>{error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">{error}</p>}</div>;
}

function TextAreaField({ id, label, value, onChange, helpText, required, errors }: { id: string; label: string; value: string; onChange: (value: string) => void; helpText?: string; required?: boolean; errors?: FormError[]; }) {
  const error = errors ? fieldError(errors, id) : undefined;
  const describedBy = [helpText ? `${id}-help` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
  return <div><label htmlFor={id} className="mb-1.5 block text-sm font-bold text-teal-dark">{label} {required && <span aria-hidden="true">*</span>}</label>{helpText && <p id={`${id}-help`} className="mb-1.5 text-sm text-body">{helpText}</p>}<textarea id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} aria-required={required} aria-invalid={Boolean(error)} aria-describedby={describedBy} rows={4} className={`w-full rounded-[var(--radius-control)] border bg-white px-4 py-3 text-base text-ink ${error ? "border-error" : "border-divider"}`} />{error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-error">{error}</p>}</div>;
}
