import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    manifests(rover: Rover!): Manifest!
  }
`;

export const resolvers = {
  Query: {
    manifests: async (_, { rover }, { dataSources }) => {
      return dataSources.nasaMarsRoversAPI.getManifestForRover(rover);
    }
  }
};
