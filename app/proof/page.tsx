import { permanentRedirect } from "next/navigation";

export default function LegacyProofPage() {
  permanentRedirect("/case-studies");
}
