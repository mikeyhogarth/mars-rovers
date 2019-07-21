import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Theme from "./theme";
import Container from "@material-ui/core/Container";

import ManifestChooser from "./ManifestChooser";
import SolChooser from "./SolChooser";

function App() {
  return (
    <Theme>
      <Container maxWidth="sm">
        <Router>
          <Route path="/" exact component={ManifestChooser} />
          <Route path="/:rover" component={SolChooser} />
        </Router>
      </Container>
    </Theme>
  );
}

export default App;
