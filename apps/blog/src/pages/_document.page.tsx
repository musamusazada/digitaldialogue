import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorName, favicon } from 'core/constants';

function isValid(value: any) {
  if (typeof value === 'string' && value.length > 0) return true;
  return false;
}

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}
          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <meta name="keywords" content="blog,development,developer,frontend" />
          {/* for korean keywords */}
          {/* <meta name="keywords" content="blog,development,developer,frontend,블로그,개발,개발자,프론트엔드" /> */}
          <meta name="twitter:creator" content={authorName} />
          {/* for google analytics */}
          <GlobalStyle />
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9BKNJWNRC7" />
              
          <Script id="google-analytics" strategy="afterInteractive">
            {`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9BKNJWNRC7');`}
          </Script>
        </Head>

        <body>
          <Layout>
            <Main />
            <Footer />
          </Layout>
          <NextScript />
              
        </body>
      </Html>
    );
  }
}
