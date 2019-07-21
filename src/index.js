import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Theme from "./theme";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./client";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Theme>
      <App />
    </Theme>
  </ApolloProvider>,
  document.getElementById("root")
);
