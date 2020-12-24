import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { Layout, Hello, WhatICanDo, Skills } from "../components";
import { createMuiTheme } from "@material-ui/core/styles";

import {
  helloData,
  whatICanDoData,
  skillsData,
  projectsData,
} from "../mock/data";
import { PortfolioProvider } from "../context/context";
import { Projects } from "../components/sections/Projects";
import ThemeProvider from "../material-ui-dark-mode/index";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));
const home: React.FC<PageProps> = ({ path }) => {
  const [hello, setHello] = useState({});
  const [whatICanDo, setWhatICanDo] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});

  useEffect(() => {
    setHello({ ...helloData });
    setWhatICanDo({ ...whatICanDoData });
    setSkills({ ...skillsData });
    setProjects({ ...projectsData });
  }, []);
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioProvider value={{ hello, whatICanDo, skills, projects }}>
        <Layout pathname={path}>
          <Container maxWidth="md" className={classes.container}>
            <Hello />
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <WhatICanDo />
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Typography component="h2" variant="h4" align="center" paragraph>
              {"Projects"}
            </Typography>
            <Projects />
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <Typography component="h2" variant="h4" align="center" paragraph>
              {"Skills"}
            </Typography>
            <Skills />
          </Container>
        </Layout>
      </PortfolioProvider>
    </ThemeProvider>
  );
};

export default home;
