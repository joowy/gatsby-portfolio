import React, { useContext } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  makeStyles,
  Toolbar,
  AppBar,
  Typography,
  IconButton as ExternalIconButton,
  useScrollTrigger,
} from "@material-ui/core";
import { WbSunny, Brightness2 } from "@material-ui/icons";
import { Link, IconButton } from "gatsby-theme-material-ui";
import PortfolioContext from "../../context/context";
import useTheme from "@material-ui/core/styles/useTheme";
import { useChangeTheme } from "../../material-ui-dark-mode/index";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap",
  },
  spacer: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(0, 0.5),
  },
}));

export const Header: React.FC = () => {
  const { hello } = useContext(PortfolioContext);
  const { GithubLink } = hello;

  const theme = useTheme();
  const changeTheme = useChangeTheme();

  const classes = useStyles();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? "inherit" : "transparent"}
      elevation={scrollTrigger ? 4 : 0}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Link to="/" title={"home"}>
          <Typography
            color="textPrimary"
            variant="h6"
            component="h1"
            className={classes.link}
            gutterBottom
          >
            {"Joseph Stout"}
          </Typography>
        </Link>
        <IconButton
          size="small"
          onClick={() => changeTheme()}
          className={classes.link}
          title={"Toggle Dark Theme"}
        >
          {theme.palette.type === "light" ? <WbSunny /> : <Brightness2 />}
        </IconButton>
        <div className={classes.spacer} />
        <nav>
          <ExternalIconButton
            size="small"
            href={GithubLink}
            rel="external noreferrer noopener nofollow"
            target="_blank"
            className={classes.link}
            title={"GitHub"}
            style={{
              color: theme.palette.type === "light" ? "#171515" : "#fff",
            }}
          >
            <GitHubIcon />
          </ExternalIconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
