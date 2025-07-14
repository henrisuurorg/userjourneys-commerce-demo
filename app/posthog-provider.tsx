"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!posthogKey) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: "/api/event",
      ui_host: "https://eu.posthog.com",
      capture_pageview: false,
      capture_pageleave: true,
      debug: process.env.NODE_ENV === "development",
      session_recording: {
        maskAllInputs: false,
        recordCrossOriginIframes: true,
      },
      autocapture: process.env.NODE_ENV !== "development",
    });

    if (process.env.NODE_ENV === "development") {
      setTimeout(() => {
        posthog.capture("test_event", { source: "provider_init" });
      }, 1000);
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
} 