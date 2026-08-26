import { permanentRedirect } from "next/navigation";

export default function LegacyMovementPage() {
  permanentRedirect("/movement");
}
