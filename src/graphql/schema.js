import { gql } from "apollo-server-lambda";
import dotenv from "dotenv";
dotenv.config();

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `Hello, graphql: ${process.env.API_KEY}`;
    }
  }
};
