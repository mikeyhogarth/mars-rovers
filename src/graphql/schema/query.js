import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    "This manifest will list details of the Rover's mission to help narrow down photo queries to the API."
    manifests(rover: Rover!): Manifest!

    "Query photos by Martian sol"
    photosBySol(rover: Rover!, sol: Int!, camera: Camera, page: Int): [Photo]
  }
`;

export const resolvers = {
  Query: {
    manifests: async (_, args, { dataSources }) => {
      return dataSources.nasaMarsRoversAPI.getManifestForRover(args);
    },
    photosBySol: async (_, args, { dataSources }) => {
      return dataSources.nasaMarsRoversAPI.getPhotosBySol(args);
    }
  }
};
