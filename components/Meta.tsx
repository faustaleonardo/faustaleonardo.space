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

      {/* HTML Meta Tags */}
      <title key="title">{SITE_METADATA.title}</title>
      <meta
        key="description"
        name="description"
        content={SITE_METADATA.description}
      />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={SITE_METADATA.title} />
      <meta itemProp="description" content={SITE_METADATA.description} />
      <meta itemProp="image" content={SITE_METADATA.imageUrl} />

      {/* Facebook Meta Tags */}
      <meta key="og-url" property="og:url" content={SITE_METADATA.url} />
      <meta property="og:type" content="website" />
      <meta key="og-title" property="og:title" content={SITE_METADATA.title} />
      <meta
        key="og-description"
        property="og:description"
        content={SITE_METADATA.description}
      />
      <meta
        key="og-image"
        property="og:image"
        content={SITE_METADATA.imageUrl}
      />
      <meta property="og:image:width" content={SITE_METADATA.imageHeight} />
      <meta property="og:image:height" content={SITE_METADATA.imageWidth} />
      <meta property="og:site_name" content={SITE_METADATA.title} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta key="tw-title" name="twitter:title" content={SITE_METADATA.title} />
      <meta
        key="tw-description"
        name="twitter:description"
        content={SITE_METADATA.description}
      />
      <meta
        key="tw-image"
        name="twitter:image"
        content={SITE_METADATA.imageUrl}
      />
      <meta name="twitter:image:width" content={SITE_METADATA.imageHeight} />
      <meta name="twitter:image:height" content={SITE_METADATA.imageWidth} />
      <meta name="twitter:creator" content={SITE_METADATA.author} />
      <meta key="tw-url" name="twitter:url" content={SITE_METADATA.url} />
    </Head>
  );
}
