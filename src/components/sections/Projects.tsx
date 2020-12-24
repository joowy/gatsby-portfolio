import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { ProjectCard } from "../cards/ProjectCard";
import PortfolioContext from "../../context/context";

export const Projects: React.FC = () => {
  const { projects } = useContext(PortfolioContext);
  const { projectsList } = projects;

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
      {projectsList?.map((project) => {
        const {
          id,
          name,
          date,
          link,
          detail,
          imageFileName,
          icon,
          tags,
        } = project;
        return (
          <ProjectCard
            id={id}
            key={id}
            name={name}
            date={date}
            link={link}
            detail={detail}
            imageFileName={imageFileName}
            icon={icon}
            tags={tags}
          />
        );
      })}
    </Grid>
  );
};
