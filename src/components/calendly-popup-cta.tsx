"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PopupModal, useCalendlyEventListener } from "react-calendly";

/**
 * Same booking flow as CalendlyEmbed, but as a popup triggered from a button
 * instead of an inline widget. Used on nav-free landing pages so a visitor
 * never has to leave the page (and its chrome) to book a call.
 */
export function CalendlyPopupCta({
  className,
  children,
  url = "https://calendly.com/rick-rickvianen/kennismaking",
  redirectTo = "/intake/bedankt",
}: {
  className?: string;
  children: React.ReactNode;
  url?: string;
  redirectTo?: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: () => {
      setOpen(false);
      router.push(redirectTo);
    },
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`appearance-none ${className ?? ""}`}
      >
        {children}
      </button>
      {open && (
        <PopupModal
          url={url}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={document.body}
        />
      )}
    </>
  );
}
