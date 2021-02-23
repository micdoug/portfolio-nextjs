import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../theme';
import GlobalStyle from '../theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
