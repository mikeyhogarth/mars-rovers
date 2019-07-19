import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";
import { typeDefs as Query, resolvers as queryResolvers } from "./query";
import { typeDefs as Study, resolvers as studyResolvers } from "./study";

export default makeExecutableSchema({
  typeDefs: [Query, Study],
  resolvers: merge(queryResolvers, studyResolvers)
});
