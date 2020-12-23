import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "bootstrap/dist/css/bootstrap.min.css";

const HelloImg = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      image: file(relativePath: { eq: "actualme.png" }) {
        id
        childImageSharp {
          fixed(width: 120) {
            base64
            width
            height
            src
            srcSet
          }
          fluid(maxWidth: 200, maxHeight: 200) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  `);
  return (
    <Img fixed={data.image.childImageSharp.fixed} className="rounded-circle" />
  );
};

export default HelloImg;
