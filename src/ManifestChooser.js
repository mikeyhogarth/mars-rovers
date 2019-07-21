import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";

import Theme from "./theme";
import Container from "@material-ui/core/Container";
import Manifest from "./Manifest";

const rovers = ["Curiosity", "Spirit", "Opportunity"];

function App() {
  const [roverIndex, setRoverIndex] = useState(0);

  function handleChangeRover(event, newValue) {
    setRoverIndex(newValue);
  }

  return (
    <Theme>
      <Container maxWidth="sm">
        <Tabs
          centered
          variant="fullWidth"
          value={roverIndex}
          onChange={handleChangeRover}
        >
          {rovers.map(rover => (
            <Tab label={rover} />
          ))}
        </Tabs>
        <Manifest rover={rovers[roverIndex].toUpperCase()} />
      </Container>
    </Theme>
  );
}

export default App;
