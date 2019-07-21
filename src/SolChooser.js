import React, { useState } from "react";

function SolChooser() {
  const [sol, setSol] = useState(0);

  return <div>Sol: {sol}</div>;
}

export default SolChooser;
