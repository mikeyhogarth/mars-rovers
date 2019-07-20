import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { typeDefs as Enums } from "./enums";
import { typeDefs as Query, resolvers as queryResolvers } from "./query";
import {
  typeDefs as Manifest,
  resolvers as manifestResolvers
} from "./manifest";

export default makeExecutableSchema({
  typeDefs: [Enums, Query, Manifest],
  resolvers: merge(queryResolvers, manifestResolvers)
});
