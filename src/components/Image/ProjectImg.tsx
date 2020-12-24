import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
type Props = {
  filename: string;
  alt: string;
};
export const ProjectImg: React.FC<Props> = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query ProjectImages {
        images: allFile {
          edges {
            node {
              id
              name
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) =>
        n.node.relativePath.includes(filename)
      );

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={alt} fluid={imageFluid} />;
    }}
  />
);

export default ProjectImg;
