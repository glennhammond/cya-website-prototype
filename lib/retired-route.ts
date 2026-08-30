export function retiredRouteResponse() {
  return new Response("This Corporate Yoga Australia route has been retired.\n", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
