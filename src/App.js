import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import ManifestChooser from "./ManifestChooser";
import SolChooser from "./SolChooser";

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main
    },
    paper: {
      minHeight: "100vh"
    }
  };
};

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper square className={classes.paper}>
          <Router>
            <Route path="/" exact component={ManifestChooser} />
            <Route path="/rovers/:rover" component={SolChooser} />
          </Router>
        </Paper>
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
