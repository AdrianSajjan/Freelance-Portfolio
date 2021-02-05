import Head from "next/head";
import fonts from "constants/fonts";
import theme from "constants/theme";
import { useRouter } from "next/router";
import Loader from "components/App/Loader";
import { Fragment, useEffect, useState } from "react";
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
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeError", handleComplete);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeError", handleComplete);
      router.events.off("routeChangeComplete", handleComplete);
    };
  });

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
        <Loader show={loading} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
