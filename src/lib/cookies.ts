"use client";

// Función para establecer una cookie
export const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof window === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Función para obtener una cookie
export const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Función para eliminar una cookie
export const deleteCookie = (name: string) => {
  if (typeof window === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Función para verificar si las cookies están aceptadas
export const areCookiesAccepted = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const accepted = localStorage.getItem('cookies-accepted');
  return accepted === 'true';
};

// Función para aceptar cookies
export const acceptCookies = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookies-accepted', 'true');
  setCookie('user-preferences', 'accepted', 365);
};

// Función para rechazar cookies
export const rejectCookies = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('cookies-accepted', 'false');
  // Eliminar cookies existentes excepto las esenciales
  deleteCookie('user-preferences');
};

// Función para obtener el consentimiento de cookies
export const getCookieConsent = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('cookies-accepted');
};
