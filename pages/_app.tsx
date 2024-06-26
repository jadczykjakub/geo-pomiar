import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import { EnvVars } from 'env';

const navItems: NavItems = [
  // { title: 'Awesome SaaS Features', href: '/features' },
  { title: 'Oferta', href: '/oferta' },
  { title: 'Kontakt', href: '/kontakt' },
];

function MyApp({ Component, pageProps }: AppProps) {
  const currentUrl = EnvVars.URL;
  const ogImageUrl = EnvVars.OG_IMAGES_URL;
  const siteName = EnvVars.SITE_NAME;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta property="og:image" content="/hero/hero.png" />
        <meta property="og:title" content={siteName} />
        <meta property="og:site_name" content={siteName} />
        {/* <meta property="og:type" content="article" /> */}
        {/* <meta property="og:url" content={currentUrl} /> */}
        {/* <meta property="og:image" content={ogImageUrl} /> */}
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      {/* <ColorModeScript /> */}
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />
        <Component {...pageProps} />

        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return null;
}

export default MyApp;
