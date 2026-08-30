export function isProductionDeployment() {
  return process.env.VERCEL_ENV === "production";
}

export function releaseIndexingEnabled() {
  return isProductionDeployment() && process.env.CYA_INDEXING_ENABLED === "true";
}

export function analyticsTrackingEnabled() {
  return process.env.CYA_ANALYTICS_ENABLED === "true";
}

export function enquirySubmissionEnabled() {
  return process.env.CYA_ENQUIRY_SUBMISSION_ENABLED === "true";
}
