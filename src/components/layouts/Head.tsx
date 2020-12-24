import React from "react";
import { Helmet } from "gatsby-plugin-react-i18next";

export const Head: React.FC = ({}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Joseph Stout Portfolio</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d1e1e" />
      <meta name="description" content="Joseph Stout's personal website" />
    </Helmet>
  );
};
