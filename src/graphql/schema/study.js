import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Study {
    title: String
  }
`;

export const resolvers = {
  Study: {
    title(obj) {
      return obj._source["Study Title"];
    }
  }
};
