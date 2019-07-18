import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `Hello, graphql`;
    }
  }
};
