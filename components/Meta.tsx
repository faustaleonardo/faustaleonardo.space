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
      <title key="title">Fausta | Mobile & Web Engineer</title>
      <meta
        key="description"
        name="description"
        content="I'm a software engineer specializing in mobile and web app. Currently, I'm working as a SDE Frontend @Sayurbox"
      />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="Fausta | Mobile & Web Engineer" />
      <meta
        itemProp="description"
        content="I'm a software engineer specializing in mobile and web app. Currently, I'm working as a SDE Frontend @Sayurbox"
      />
      <meta
        itemProp="image"
        content="https://faustaleonardo.space/meta/meta.png"
      />

      {/* Facebook Meta Tags */}
      <meta
        key="og-url"
        property="og:url"
        content="https://faustaleonardo.space"
      />
      <meta property="og:type" content="website" />
      <meta
        key="og-title"
        property="og:title"
        content="Fausta | Mobile & Web Engineer"
      />
      <meta
        key="og-description"
        property="og:description"
        content="I'm a software engineer specializing in mobile and web app. Currently, I'm working as a SDE Frontend @Sayurbox"
      />
      <meta
        key="og-image"
        property="og:image"
        content="https://faustaleonardo.space/meta/meta.png"
      />
      <meta property="og:image:width" content="776" />
      <meta property="og:image:height" content="2122" />
      <meta property="og:site_name" content="Fausta | Mobile & Web Engineer" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        key="tw-title"
        name="twitter:title"
        content="Fausta | Mobile & Web Engineer"
      />
      <meta
        key="tw-description"
        name="twitter:description"
        content="I'm a software engineer specializing in mobile and web app. Currently, I'm working as a SDE Frontend @Sayurbox"
      />
      <meta
        key="tw-image"
        name="twitter:image"
        content="https://faustaleonardo.space/meta/meta.png"
      />
      <meta name="twitter:image:width" content="776" />
      <meta name="twitter:image:height" content="2122" />
      <meta name="twitter:creator" content="Fausta Leonardo" />
      <meta
        key="tw-url"
        name="twitter:url"
        content="https://faustaleonardo.space"
      />
    </Head>
  );
}
