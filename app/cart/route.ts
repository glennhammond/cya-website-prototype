import { retiredRouteResponse } from "@/lib/retired-route";

export function GET() {
  return retiredRouteResponse();
}

export function HEAD() {
  return retiredRouteResponse();
}
