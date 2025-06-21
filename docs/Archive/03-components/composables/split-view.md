# Split Views — AQXION

Design patterns for organizing content with Split Views.

## Split Views

-   Use for multi-panel layouts (e.g., sidebar + main content, main content + inspector).
-   Recommended for desktop screen sizes (`lg:` and above). Typically collapses to a single panel or stacked layout on mobile.
-   Highlight active selection in a list or navigation panel using background color (e.g., `bg-gray-200`) or a border accent (e.g., `border-l-2 border-primary`).
-   Implement using `flex` or `grid` for layout.
-   Control visibility of secondary panels on smaller screens (e.g., hide sidebar on mobile, show on tablet/desktop).

## Implementation Notes

-   Use Tailwind CSS for responsive layout and visibility utilities.
-   Ensure content within panels is scrollable independently if necessary.
-   Consider accessibility for keyboard navigation between panels and within panels. Use appropriate ARIA roles if the structure is complex (e.g., `role="region"` for distinct panels).

---
