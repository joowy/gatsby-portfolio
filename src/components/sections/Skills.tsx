import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  LinearProgress,
  CardContent,
  Card,
} from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { ExpandCardContent } from "../cards/ExpandCardContent";
import { SkillsCard } from "../cards/SkillsCard";
const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));
export const Skills: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <SkillsCard
        id={"1"}
        name={"Languages"}
        skills={[{ id: "1", name: "Java", level: 3 }]}
      />
    </Grid>
  );
};
