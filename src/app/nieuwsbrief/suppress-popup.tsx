"use client";

import { useEffect } from "react";

export function SuppressKlaviyoPopup() {
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ type: string }>).detail;
      if (detail?.type === "open") {
        const w = window as unknown as { klaviyo?: { push(args: unknown[]): void } };
        w.klaviyo?.push(["close"]);
      }
    };

    window.addEventListener("klaviyoForms", handler);
    return () => window.removeEventListener("klaviyoForms", handler);
  }, []);

  return null;
}
