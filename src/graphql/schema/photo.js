import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Photo {
    img_src: String
    sol: Int
    earth_date: String
    camera: String
  }
`;

export const resolvers = {
  Photo: {
    camera(obj) {
      return obj.camera.name;
    }
  }
};
