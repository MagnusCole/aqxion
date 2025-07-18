import "../../styles/globals.css";
import "./styles/landing-optimizations.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Landing page specific head elements */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .landing-page {
            font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif);
          }
          /* Critical styles for form inputs */
          .landing-page input:focus {
            outline: 2px solid var(--ia-blue);
            outline-offset: 2px;
          }
          /* Prevent layout shift */
          .landing-page img {
            height: auto;
          }
        `
      }} />
      
      {children}
      
      {/* Performance and tracking scripts */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Lazy load non-critical resources
          document.addEventListener('DOMContentLoaded', function() {
            // Implement lazy loading for images below the fold
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
                }
              });
            });
            images.forEach(img => imageObserver.observe(img));
          });
        `
      }} />
    </>
  );
}
