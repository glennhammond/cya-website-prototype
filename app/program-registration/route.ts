import { retiredRouteResponse } from "@/lib/retired-route";

export const dynamic = "force-dynamic";

export async function GET() {
  return retiredRouteResponse();
}

export async function HEAD() {
  return retiredRouteResponse();
}
