"use client"

import { LeadMagnetPopup } from "@/components/composables/data-display/LeadMagnetPopup";

export function ClientLeadMagnetWrapper() {
  return (
    <LeadMagnetPopup 
      trigger="exit"
      onSubmit={(_email, _source) => {
        // Track conversion in analytics
        if (typeof window !== 'undefined') {
          window.gtag?.('event', 'lead_capture', {
            event_category: 'conversion',
            event_label: 'exit_intent_popup',
            value: 1
          });
        }
      }}
    />
  );
}
