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

type Props = {
  id: string;
  name: string;
  skills: any;
};
const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));
export const SkillsCard: React.FC<Props> = ({ id, name, skills }) => {
  const classes = useStyles();
  const defaultExpandedBreakpoints: Breakpoint[] = ["xl", "lg", "md"];

  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Card>
        <ExpandCardContent
          id={id}
          defaultExpanded={true}
          defaultExpandedBreakpoints={defaultExpandedBreakpoints}
          title={
            <Typography component="h2" variant="h6">
              {name}
            </Typography>
          }
          detail={
            <CardContent className={classes.cardContent}>
              {skills?.map((skill) => (
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                  key={skill?.id}
                >
                  <Grid item xs={4}>
                    {skill?.name}
                  </Grid>
                  <Grid item xs={8}>
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      title={`${skill?.level ? skill.level * 20 : 0}%`}
                      value={skill?.level ? skill.level * 20 : 0}
                    />
                  </Grid>
                </Grid>
              ))}
            </CardContent>
          }
        />
      </Card>
    </Grid>
  );
};
