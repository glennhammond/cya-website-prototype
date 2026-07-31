import { forwardRef } from "react";

export interface FormError {
  id: string;
  message: string;
}

export const ErrorSummary = forwardRef<HTMLDivElement, { errors: FormError[] }>(function ErrorSummary(
  { errors },
  ref,
) {
  if (errors.length === 0) return null;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      aria-labelledby="error-summary-heading"
      className="mb-8 rounded-[var(--radius-card)] border-2 border-error bg-white p-6 focus:outline-none"
    >
      <h2 id="error-summary-heading" className="text-lg font-bold text-error">
        There is a problem
      </h2>
      <ul className="mt-3 space-y-1">
        {errors.map((error) => (
          <li key={error.id}>
            <a href={`#${error.id}`} className="text-sm font-semibold text-error underline decoration-2 underline-offset-4">
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
