import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import ManifestChooser from "./ManifestChooser";
import SolChooser from "./SolChooser";
import Sol from "./Sol";

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.grey
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
        <Paper square elevation={24} className={classes.paper}>
          <Router>
            <Route path="/" exact component={ManifestChooser} />
            <Route path="/rovers/:rover" exact component={SolChooser} />
            <Route path="/rovers/:rover/sols/:sol" exact component={Sol} />
          </Router>
        </Paper>
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
