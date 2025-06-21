# Tab Views — AQXION

Design patterns for organizing content with Tab Views.

## Tab Views

-   Use for presenting mutually exclusive content panels that share a common context.
-   Limit the number of tabs to a manageable amount (e.g., 3-6). If more are needed, consider a dropdown menu or alternative navigation.
-   Place tab controls consistently, typically at the top of the content area (`border-b` for separation) or sometimes at the bottom (`border-t`).
-   Style tab controls using `flex gap-2` or similar for spacing.
-   Inactive tab panels should be hidden (e.g., using `hidden` class or conditional rendering).
-   Label tabs clearly and concisely.
-   Ensure accessibility:
    *   Use `role="tablist"` for the container of tab controls.
    *   Use `role="tab"` for each tab control.
    *   Use `aria-selected="true/false"` to indicate the active tab.
    *   Use `aria-controls` on each tab to link it to its corresponding `role="tabpanel"`.
    *   Ensure tab panels have `role="tabpanel"` and are associated with their tab via `aria-labelledby`.
    *   Support keyboard navigation (arrow keys to switch tabs, Enter/Space to activate).

## Implementation Notes

-   Use Tailwind CSS for styling and layout.
-   Manage active tab state using React state or JavaScript.
-   Pay close attention to ARIA attributes for a fully accessible implementation.

---
