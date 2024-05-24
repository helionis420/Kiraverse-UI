import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* KUSANAGI */}
        <link
          rel="preload"
          href="/fonts/Kusanagi.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Kusanagi.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* SPACE MONO REGULAR */}
        <link
          rel="preload"
          href="/fonts/SpaceMono-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* SPACE MONO BOLD */}
        <link
          rel="preload"
          href="/fonts/SpaceMono-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceMono-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="main-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
