import { permanentRedirect } from "next/navigation";

export default async function LegacyConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const query = interest ? `?interest=${encodeURIComponent(interest)}` : "";
  permanentRedirect(`/contact${query}`);
}
