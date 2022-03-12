import Head from 'next/head';
import { SITE_METADATA } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <title>{SITE_METADATA.title}</title>
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content={SITE_METADATA.description}
        key="description"
      />
      <link rel="canonical" href={SITE_METADATA.url} />

      <meta property="og:url" content={SITE_METADATA.url} />
      <meta property="og:type" content={SITE_METADATA.type} />
      <meta property="og:site_name" content={SITE_METADATA.title} />
      <meta property="og:description" content={SITE_METADATA.description} />
      <meta property="og:title" content={SITE_METADATA.title} />
      <meta property="og:image" content={SITE_METADATA.imageUrl} />
      <meta property="og:description" content={SITE_METADATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_METADATA.twitterUsername} />
      <meta name="twitter:title" content={SITE_METADATA.title} />
      <meta name="twitter:description" content={SITE_METADATA.description} />
      <meta name="twitter:image" content={SITE_METADATA.imageUrl} />
      <meta name="twitter:url" content={SITE_METADATA.url} />
      <meta name="twitter:creator" content={SITE_METADATA.twitterUsername} />

      <meta property="article:author" content={SITE_METADATA.author} />
    </Head>
  );
}
