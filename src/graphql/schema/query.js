import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    getManifestForRover(rover: Rover): Manifest
  }
`;

export const resolvers = {
  Query: {
    getManifestForRover: async (_, { rover }, { dataSources }) => {
      return dataSources.nasaMarsRoversAPI.getManifestForRover(rover);
    }
  }
};
