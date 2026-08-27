import path from "node:path";
import type { NextConfig } from "next";

const redirects: NonNullable<NextConfig["redirects"]> = async () => [
  { source: "/home", destination: "/", statusCode: 301 },
  { source: "/getting-started", destination: "/", statusCode: 301 },
  { source: "/workplace-wellbeing", destination: "/", statusCode: 301 },
  { source: "/programs", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/personalised-wellbeing-programs", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/old-bespoke-services", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/old-services", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/what-we-offer", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/workplace-wellbeing/movement", destination: "/movement", statusCode: 301 },
  { source: "/our-classes", destination: "/movement", statusCode: 301 },
  { source: "/wellbeing-studio", destination: "/online-wellbeing", statusCode: 301 },
  { source: "/proof", destination: "/case-studies", statusCode: 301 },
  { source: "/proof/case-study", destination: "/case-studies", statusCode: 301 },
  { source: "/reviews", destination: "/case-studies", statusCode: 301 },
  { source: "/testimonials", destination: "/case-studies", statusCode: 301 },
  { source: "/about-us", destination: "/about", statusCode: 301 },
  { source: "/old-about-2", destination: "/about", statusCode: 301 },
  { source: "/our-instructors", destination: "/about", statusCode: 301 },
  { source: "/consultation", destination: "/contact", statusCode: 301 },
  { source: "/contact-us", destination: "/contact", statusCode: 301 },
  { source: "/google-ads-lander", destination: "/workplace-yoga-australia", statusCode: 301 },
  { source: "/contact-thank-you-online-1", destination: "/contact-thank-you-online", statusCode: 301 },
  { source: "/services", destination: "/movement", statusCode: 301 },
  { source: "/resources", destination: "/blog", statusCode: 301 },
  { source: "/bespoke-services", destination: "/workplace-wellbeing-programs", statusCode: 301 },
  { source: "/book-a-class", destination: "/contact", statusCode: 301 },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  redirects,
};

export default nextConfig;
