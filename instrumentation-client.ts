console.log("🚀 Instrumentation client loading...");
console.log("PostHog Key:", process.env.NEXT_PUBLIC_POSTHOG_KEY);
console.log("PostHog Host:", process.env.NEXT_PUBLIC_POSTHOG_HOST);

import posthog from "posthog-js";

console.log("📊 Initializing PostHog...");
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: "2025-05-24",
  capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
  debug: process.env.NODE_ENV === "development",
  session_recording: {
    maskAllInputs: false,
    recordCrossOriginIframes: true,
  },
});

console.log("✅ PostHog initialized");
