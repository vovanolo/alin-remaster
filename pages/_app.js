import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/mobilenavbar.css";
import "../styles/Callback.css";
import "../styles/button.css";
import "../styles/loader.css";
import "../styles/datepicker.css";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import NProgress from "nprogress";

export default function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });

  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
