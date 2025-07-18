"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!posthogKey) {
      console.log("PostHog key not found");
      return;
    }

    posthog.init(posthogKey, {
      api_host: "/api/event",
      ui_host: "https://eu.posthog.com",
      capture_pageview: false,
      capture_pageleave: true,
      debug: process.env.NODE_ENV === "development",
      disable_session_recording: true,
      session_recording: {
        maskAllInputs: false,
        recordCrossOriginIframes: true
      },
      autocapture: process.env.NODE_ENV !== "development"
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey) {
        if (event.code === "KeyR") {
          posthog.startSessionRecording();
          console.log("PostHog session recording started.");
        }

        if (event.code === "KeyS") {
          posthog.stopSessionRecording();
          console.log("PostHog session recording stopped.");
          posthog.reset();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (process.env.NODE_ENV === "development") {
      setTimeout(() => {
        posthog.capture("test_event", { source: "provider_init" });
      }, 1000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
} 