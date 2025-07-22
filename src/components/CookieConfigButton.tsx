'use client';

export default function CookieConfigButton() {
  const handleReconfigureCookies = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    window.dispatchEvent(new CustomEvent('reconfigure-cookies'));
  };

  return (
    <button 
      onClick={handleReconfigureCookies}
      className="text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer"
    >
      Configurar Cookies
    </button>
  );
}
