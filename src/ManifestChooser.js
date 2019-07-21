import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import Theme from "./theme";
import Manifest from "./Manifest";

const rovers = ["Curiosity", "Spirit", "Opportunity"];

function App() {
  const [roverIndex, setRoverIndex] = useState(0);

  function handleChangeRover(event, newValue) {
    setRoverIndex(newValue);
  }

  return (
    <Theme>
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
    </Theme>
  );
}

export default App;
