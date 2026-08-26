import { permanentRedirect } from "next/navigation";

export default function LegacyWellbeingStudioPage() {
  permanentRedirect("/online-wellbeing");
}
