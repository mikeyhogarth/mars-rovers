import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Photo {
    img_src: String
    sol: Int
    earth_date: String
  }
`;

export const resolvers = {};
