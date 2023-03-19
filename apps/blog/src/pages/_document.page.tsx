import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorName, favicon } from 'core/constants';

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
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-9BKNJWNRC7`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-9BKNJWNRC7');`,
              }}
            />
          </>
          <GlobalStyle />
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
