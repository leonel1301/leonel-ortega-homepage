export const siteConfig = {
  name: 'Leonel Ortega',
  title: 'Leonel Ortega',
  description:
    'Portfolio of Leonel Ortega — Software Engineer specializing in full-stack and AI-powered applications with C#/.NET, React, Python, and cloud technologies. Based in Lima, Peru.',
  url: 'leonel-ortega-homepage.vercel.app',
  ogImage: '/images/leoomg.jpg',
  twitterHandle: '@leoo_omgg',
  locale: 'en_US',
  author: 'Leonel Ortega',
  keywords: [
    'Leonel Ortega',
    'Leonel Alessandro Ortega Espinoza',
    'software engineer',
    'fullstack developer',
    'portfolio',
    'Lima Peru',
    'web development',
    'leoomg',
  ].join(', '),
};

export function pageTitle(pageTitle) {
  if (!pageTitle) {
    return `${siteConfig.title} — Software Engineer Portfolio`;
  }
  return `${pageTitle} | ${siteConfig.name}`;
}

export function absoluteUrl(path = '') {
  const base = siteConfig.url.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: 'Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    sameAs: [
      'https://github.com/leonel1301',
      'https://www.linkedin.com/in/ortegaleonel/',
      'https://twitter.com/leoo_omgg',
    ],
  };
}
