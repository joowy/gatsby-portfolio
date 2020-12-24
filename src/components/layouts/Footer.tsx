import React from "react";
import { makeStyles, Typography, Grid, Container } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));
export const Footer: React.FC = () => {
  const classes = useStyles();
  const nowDate = new Date();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              paragraph
            >
              {"Powered by "}
              <Link
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gatsbyjs.com"
              >
                {"GatsbyJS ❤️"}
              </Link>
              {"Theme by "}
              <Link
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://material-ui.com/"
              >
                {"Material-UI 🎉"}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              {"© " + nowDate.getFullYear() + " Joseph Stout"}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
