import React from "react";
import { Helmet } from "gatsby-plugin-react-i18next";

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
};

export const Head: React.FC<Props> = ({
  title = undefined,
  description = undefined,
  pathname = undefined,
  image = undefined,
}) => {
  const defaultMetadata = {
    title: "siteMetadata.title",
    shortTitle: "siteMetadata.shortTitle",
    description: "siteMetadata.description",
    author: "siteMetadata.author",
    image: "siteMetadata.image",
  };

  return (
    <Helmet>
      <title>Joseph Stout Portfolio</title>
      <meta charSet="utf-8" />
    </Helmet>
  );
};
