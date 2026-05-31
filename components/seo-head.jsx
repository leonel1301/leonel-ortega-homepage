import Head from 'next/head';
import {
  absoluteUrl,
  pageTitle,
  personJsonLd,
  siteConfig,
} from '../lib/seo';

const SeoHead = ({ title, description, path = '', noindex = false }) => {
  const resolvedTitle = pageTitle(title);
  const resolvedDescription = description || siteConfig.description;
  const canonicalUrl = absoluteUrl(path);
  const ogImageUrl = absoluteUrl(siteConfig.ogImage);

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="author" content={siteConfig.author} />
      <meta name="keywords" content={siteConfig.keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
    </Head>
  );
};

export default SeoHead;
