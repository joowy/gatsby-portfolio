import React, { useContext } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { SkillsCard } from "../cards/SkillsCard";
import PortfolioContext from "../../context/context";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));
export const Skills: React.FC = () => {
  const { skills } = useContext(PortfolioContext);
  const { catagories } = skills;

  return (
    <Grid container spacing={2}>
      {catagories &&
        catagories?.map((items) => {
          const { id, name, techs } = items;
          return <SkillsCard key={id} id={id} name={name} skills={techs} />;
        })}
    </Grid>
  );
};
