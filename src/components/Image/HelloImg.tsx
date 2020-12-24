import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {
  filename: string;
  alt: string;
};

export const HelloImg: React.FC<Props> = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query HelloImage {
        images: allFile {
          edges {
            node {
              id
              name
              relativePath
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
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

      const imageFluid = image.node.childImageSharp.fixed;
      return <Img alt={alt} fixed={imageFluid} className="rounded-circle" />;
    }}
  />
);

// const HelloImg = () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       image: file(relativePath: { eq: "actual_me.png" }) {
//         id
//         childImageSharp {
//           fixed(width: 120) {
//             base64
//             width
//             height
//             src
//             srcSet
//           }
//           fluid(maxWidth: 200, maxHeight: 200) {
//             base64
//             tracedSVG
//             srcWebp
//             srcSetWebp
//             originalImg
//             originalName
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <Img fixed={data.image.childImageSharp.fixed} className="rounded-circle" />
//   );
// };

// export default HelloImg;

/*

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



*/
