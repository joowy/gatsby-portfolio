import React, { useContext } from "react";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import { HelloImg } from "../Image/HelloImg";
import PortfolioContext from "../../context/context";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const Hello: React.FC = () => {
  const { hello } = useContext(PortfolioContext);
  const {
    title,
    name,
    profilePic,
    description,
    GithubLink,
    LinkedIn,
    TwitterLink,
    EmailMe,
  } = hello;

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <HelloImg filename={profilePic} alt={name} />
          </Grid>
          <Grid item xs={11} sm={10}>
            <Typography component="span" variant="h6">
              {(name || "MISSING") + (title ? " - " + title : "")}
            </Typography>
            <Typography variant="body1" paragraph>
              {description || "MISSING"}
            </Typography>
            <Button
              href={EmailMe || ""}
              variant="outlined"
              color="secondary"
              size="medium"
              rel="external noreferrer noopener nofollow"
              target="_blank"
              className={classes.button}
            >
              {"Email"}
            </Button>
            <Button
              href={GithubLink || ""}
              variant="outlined"
              color="secondary"
              size="medium"
              rel="external noreferrer noopener nofollow"
              target="_blank"
              className={classes.button}
            >
              {"GitHub"}
            </Button>
            <Button
              href={LinkedIn || ""}
              variant="outlined"
              color="secondary"
              size="medium"
              rel="external noreferrer noopener nofollow"
              target="_blank"
              className={classes.button}
            >
              {"LinkedIn"}
            </Button>
            <Button
              href={TwitterLink || ""}
              variant="outlined"
              color="secondary"
              size="medium"
              rel="external noreferrer noopener nofollow"
              target="_blank"
              className={classes.button}
            >
              {"Twitter"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
