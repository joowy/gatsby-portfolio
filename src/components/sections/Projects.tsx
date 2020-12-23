import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles, Grid } from "@material-ui/core";
import { ProjectCard } from "../cards/ProjectCard";

import CasinoIcon from "@material-ui/icons/Casino";

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const Projects: React.FC = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query Project {
      image: file(relativePath: { eq: "xxx.png" }) {
        id
        childImageSharp {
          fixed(width: 200) {
            base64
            width
            height
            src
            srcSet
          }
          fluid {
            sizes
            src
            srcSet
            aspectRatio
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
      <ProjectCard
        id={"1"}
        name={"PROECJT 1"}
        date={"10/12"}
        link={"google.com"}
        detail={"DESCRITUI"}
        image={data.image.childImageSharp.fluid}
        icon={CasinoIcon}
        tags={["aasa", "Asd"]}
      />
    </Grid>
  );
};
