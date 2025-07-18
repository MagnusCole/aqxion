// Componente para Google Analytics 4 directo (sin GTM)
'use client';

import Script from 'next/script';

interface GoogleAnalytics4Props {
  measurementId: string;
}

export function GoogleAnalytics4({ measurementId }: GoogleAnalytics4Props) {
  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}
