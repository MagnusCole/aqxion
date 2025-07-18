// LLM-OPTIMIZED: Next.js SEO components for AQXION Growth Equity Partner
// Auto-improved SEO components with dynamic meta generation for equity partnerships

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  canonicalUrl?: string;
  schema?: object;
  noIndex?: boolean;
  businessType?: 'local' | 'national' | 'international';
  serviceArea?: string[];
}

export interface PageSEOConfig {
  homepage: SEOProps;
  servicios: SEOProps;
  casos: SEOProps;
  contacto: SEOProps;
  blog: SEOProps;
}

// Default SEO configuration for AQXION Growth Equity Partner
const defaultSEOConfig: PageSEOConfig = {
  homepage: {
    title: 'AQXION - Growth Equity Partner: Adquirimos Equity y Escalamos Tu Negocio',
    description: 'Growth Equity Partner único en México: Adquirimos equity en empresas prometedoras y escalamos con stack completo. Modelo híbrido cash + equity. Ganamos cuando tú ganas.',
    keywords: ['growth equity partner', 'socios inversores', 'equity partnership', 'híbrido cash equity', 'escalamiento negocio', 'inversión growth méxico'],
    ogType: 'website',
    businessType: 'national',
    serviceArea: ['México', 'CDMX', 'Guadalajara', 'Monterrey', 'LATAM']
  },
  servicios: {
    title: 'Growth Stack para Equity Partnerships - AQXION',
    description: 'Servicios optimizados para equity partnerships: Stack integrado con modelo híbrido cash + equity. Portfolio optimization, due diligence, scaling para exit.',
    keywords: ['growth stack equity', 'services equity partnership', 'híbrido cash equity', 'portfolio companies', 'scaling services'],
    ogType: 'service'
  },
  casos: {
    title: 'Portfolio Success Cases - AQXION Equity Partnerships',
    description: 'Descubre nuestro portfolio de equity partnerships exitosos. Casos reales de valorización, growth metrics y exits. ROI 420%+ promedio en equity stakes.',
    keywords: ['portfolio equity', 'equity success cases', 'partnership results', 'valorización cases', 'exit preparation'],
    ogType: 'article'
  },
  contacto: {
    title: 'Apply for Equity Partnership - AQXION Growth Partner',
    description: 'Apply para equity partnership evaluation. Due diligence gratuito y confidencial para empresas con potencial 5x+ growth. Solo 5 partnerships/trimestre.',
    keywords: ['apply equity partnership', 'due diligence', 'equity evaluation', 'growth partnership application'],
    ogType: 'website'
  },
  blog: {
    title: 'Equity Insights Blog - AQXION Growth Partner',
    description: 'Estrategias de equity partnerships, case studies de portfolio, insights de valorización y growth. Contenido para emprendedores ambiciosos.',
    keywords: ['equity insights', 'partnership strategies', 'valorización cases', 'growth equity blog'],
    ogType: 'article'
  }
};

// Advanced SEO Head component
export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  canonicalUrl,
  schema,
  noIndex = false,
  businessType = 'national',
  serviceArea: _serviceArea = []
}) => {
  const router = useRouter();
  
  const seoData = useMemo(() => {
    const currentUrl = canonicalUrl || `https://aqxion.com${router.asPath}`;
    const defaultImage = ogImage || 'https://aqxion.com/images/og-default.jpg';
    
    // Dynamic title optimization
    const optimizedTitle = title 
      ? `${title} | AQXION`
      : 'AQXION - Agencia de Crecimiento Automatizado';
    
    // Enhanced description with location targeting
    const enhancedDescription = description || defaultSEOConfig.homepage.description;
    
    // Comprehensive keywords
    const allKeywords = [
      ...keywords,
      'AQXION',
      'agencia marketing digital',
      'automatización',
      'leads',
      'growth marketing'
    ];

    return {
      title: optimizedTitle,
      description: enhancedDescription,
      keywords: allKeywords,
      url: currentUrl,
      image: defaultImage
    };
  }, [title, description, keywords, ogImage, canonicalUrl, router.asPath]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content="AQXION Growth Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:site_name" content="AQXION" />
      <meta property="og:locale" content="es_MX" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      <meta name="twitter:creator" content="@AQXION_Agency" />
      
      {/* Business/Location specific */}
      {businessType === 'local' && (
        <>
          <meta name="geo.region" content="MX" />
          <meta name="geo.placename" content="México" />
          <meta name="geo.position" content="19.4326;-99.1332" />
          <meta name="ICBM" content="19.4326, -99.1332" />
        </>
      )}
      
      {/* Additional Performance Tags */}
      <meta name="theme-color" content="#1F2937" />
      <meta name="msapplication-TileColor" content="#1F2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

// Dynamic page SEO hook
export const usePageSEO = (pageType: keyof PageSEOConfig, customProps?: Partial<SEOProps>) => {
  const router = useRouter();
  
  const seoConfig = useMemo(() => {
    const baseConfig = defaultSEOConfig[pageType];
    const mergedConfig = { ...baseConfig, ...customProps };
    
    // Dynamic schema generation based on page type
    if (!mergedConfig.schema) {
      mergedConfig.schema = generatePageSchema(pageType, router.asPath);
    }
    
    return mergedConfig;
  }, [pageType, customProps, router.asPath]);
  
  return seoConfig;
};

// Schema.org generator for different page types
const generatePageSchema = (pageType: keyof PageSEOConfig, currentPath: string) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AQXION",
    "url": "https://aqxion.com",
    "logo": "https://aqxion.com/images/logo.png",
    "description": "Growth Equity Partner especializado en inversión equity y escalamiento de empresas prometedoras",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressRegion": "CDMX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/aqxion-growth-equity",
      "https://twitter.com/aqxion_equity",
      "https://instagram.com/aqxion.equity"
    ]
  };

  switch (pageType) {
    case 'homepage':
      return {
        ...baseOrganization,
        "@type": "InvestmentOrAdvisoryCompany",
        "priceRange": "Equity + Cash Hybrid",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "25"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Growth Equity Partnership Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Equity Partnership & Growth Scaling",
                "description": "Partnership equity con stack completo para escalamiento y exit preparation"
              }
            }
          ]
        }
      };
      
    case 'servicios':
      return {
        ...baseOrganization,
        "@type": "Service",
        "serviceType": "Growth Equity Partnership",
        "provider": baseOrganization,
        "offers": {
          "@type": "Offer",
          "description": "Servicios completos de growth marketing automatizado",
          "priceRange": "$$$"
        }
      };
      
    case 'casos':
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Casos de Éxito - AQXION",
        "description": "Casos de estudio y resultados de clientes",
        "url": `https://aqxion.com${currentPath}`,
        "mainEntity": {
          "@type": "ItemList",
          "name": "Casos de Éxito",
          "description": "Resultados reales de clientes de AQXION"
        }
      };
      
    case 'blog':
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog AQXION",
        "description": "Blog sobre growth marketing y automatización",
        "url": `https://aqxion.com${currentPath}`,
        "publisher": baseOrganization,
        "inLanguage": "es-MX"
      };
      
    case 'contacto':
      return {
        ...baseOrganization,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "ContactPoint",
          "telephone": "+52-55-XXXX-XXXX",
          "contactType": "customer service",
          "areaServed": "MX",
          "availableLanguage": ["Spanish", "English"]
        }
      };
      
    default:
      return baseOrganization;
  }
};

// Blog post specific SEO
export interface BlogPostSEOProps extends SEOProps {
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  tags?: string[];
  readingTime?: number;
  featuredImage?: string;
}

export const BlogPostSEO: React.FC<BlogPostSEOProps> = ({
  title,
  description,
  publishDate,
  modifiedDate,
  author = 'Equipo AQXION',
  category,
  tags = [],
  readingTime,
  featuredImage,
  ...otherProps
}) => {
  const router = useRouter();
  
  const articleSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AQXION",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aqxion.com/images/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "url": `https://aqxion.com${router.asPath}`,
    "image": featuredImage || 'https://aqxion.com/images/blog-default.jpg',
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aqxion.com${router.asPath}`
    },
    "keywords": tags.join(', '),
    "articleSection": category,
    ...(readingTime && {
      "timeRequired": `PT${readingTime}M`
    })
  }), [title, description, author, publishDate, modifiedDate, router.asPath, featuredImage, tags, category, readingTime]);
  
  // Enhanced keywords for blog posts
  const blogKeywords = [
    ...tags,
    'blog aqxion',
    'marketing digital',
    'growth marketing',
    'automatización'
  ];
  
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={blogKeywords}
        ogImage={featuredImage}
        ogType="article"
        schema={articleSchema}
        {...otherProps}
      />
      
      {/* Additional blog-specific meta */}
      <Head>
        {publishDate && (
          <meta property="article:published_time" content={publishDate} />
        )}
        {modifiedDate && (
          <meta property="article:modified_time" content={modifiedDate} />
        )}
        {category && (
          <meta property="article:section" content={category} />
        )}
        {tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        {author && (
          <meta property="article:author" content={author} />
        )}
      </Head>
    </>
  );
};

// Service page specific SEO
export const ServiceSEO: React.FC<SEOProps & {
  serviceName: string;
  price?: string;
  duration?: string;
  benefits?: string[];
}> = ({
  serviceName,
  price,
  duration: _duration,
  benefits = [],
  ...seoProps
}) => {
  const serviceSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "AQXION"
    },
    "description": seoProps.description,
    "serviceType": "Marketing Digital",
    "areaServed": "México",
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "MXN"
      }
    }),
    ...(benefits.length > 0 && {
      "additionalProperty": benefits.map(benefit => ({
        "@type": "PropertyValue",
        "name": "Beneficio",
        "value": benefit
      }))
    })
  }), [serviceName, seoProps.description, price, benefits]);
  
  return (
    <SEOHead
      {...seoProps}
      schema={serviceSchema}
      ogType="service"
    />
  );
};
