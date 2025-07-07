// app/providers.tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    console.log("🔍 PostHog Provider useEffect running");
    console.log("🔑 PostHog Key:", posthogKey);
    console.log("🌍 Environment:", process.env.NODE_ENV);

    if (!posthogKey) {
      console.warn("❌ NEXT_PUBLIC_POSTHOG_KEY is not defined");
      return;
    }

    // Force reset PostHog if already initialized
    if (posthog.__loaded) {
      console.log("🔄 PostHog already loaded, resetting...");
      posthog.reset();
    }

    console.log("🚀 PostHog initializing with reverse proxy...");

    posthog.init(posthogKey, {
      api_host: "/ingest", // Use the reverse proxy
      ui_host: "https://eu.posthog.com",
      defaults: "2025-05-24",
      capture_pageview: false,
      capture_pageleave: true,
      debug: process.env.NODE_ENV === "development",
      session_recording: {
        maskAllInputs: false,
        recordCrossOriginIframes: true,
      },
      // Disable autocapture in development to reduce noise
      autocapture: process.env.NODE_ENV !== "development",
      loaded: (posthog) => {
        console.log("✅ PostHog loaded callback triggered");
        console.log("📊 PostHog config:", posthog.config);
        console.log("🔗 API Host:", posthog.config.api_host);
      },
    });

    console.log("✅ PostHog init called");

    // Only capture test event in development
    if (process.env.NODE_ENV === "development") {
      setTimeout(() => {
        console.log("🧪 Testing PostHog capture...");
        posthog.capture("test_event", { source: "provider_init" });
      }, 1000);
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
