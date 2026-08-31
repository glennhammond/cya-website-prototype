import { retiredRouteResponse } from "@/lib/retired-route";

export async function GET() {
  return retiredRouteResponse();
}

export async function HEAD() {
  const response = retiredRouteResponse();
  return new Response(null, { status: response.status, headers: response.headers });
}
