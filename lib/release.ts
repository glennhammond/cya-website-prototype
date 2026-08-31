export function isProductionDeployment() {
  return process.env.VERCEL_ENV === "production";
}

export function privacyPolicyApproved() {
  return process.env.CYA_PRIVACY_POLICY_APPROVED === "true";
}

export function hostingDpaConfirmed() {
  return process.env.CYA_HOSTING_DPA_CONFIRMED === "true";
}

export function websiteTermsApproved() {
  return process.env.CYA_TERMS_APPROVED === "true";
}

export function releaseIndexingEnabled() {
  return (
    isProductionDeployment() &&
    privacyPolicyApproved() &&
    websiteTermsApproved() &&
    process.env.CYA_INDEXING_ENABLED === "true"
  );
}

export function analyticsTrackingEnabled() {
  return privacyPolicyApproved() && process.env.CYA_ANALYTICS_ENABLED === "true";
}

export function enquirySubmissionEnabled() {
  return (
    privacyPolicyApproved() &&
    hostingDpaConfirmed() &&
    process.env.CYA_ENQUIRY_SUBMISSION_ENABLED === "true"
  );
}
