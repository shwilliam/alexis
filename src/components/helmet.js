import React from "react";
import Helmet from "react-helmet";

export default function HelmetComponent({ page }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>Alexis {page ? ` |  ${page}` : "Ocampo"}</title>
    </Helmet>
  );
}
