import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/mobilenavbar.css";
import "../styles/Callback.css";
import "../styles/button.css";
import "../styles/loader.css";
import Router from "next/router";
import React, { useState } from "react";
import Loader from "../components/Loader";

export default function MyApp({ Component, pageProps }) {
  const [isLoad, setIsLoad] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setIsLoad(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setIsLoad(false);
  });

  return (
    <React.Fragment>
      {isLoad && <Loader />}
      <Component {...pageProps} />
    </React.Fragment>
  );
}
