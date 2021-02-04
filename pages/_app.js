import Head from "next/head";
import { Fragment } from "react";
import fonts from "constants/fonts";
import theme from "constants/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    scroll-behavior: smooth;
    background-color: #ffffff;
    font-family: "Overpass", serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href={fonts} />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
