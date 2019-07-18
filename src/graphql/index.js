import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./schema";
//const isDevelopment = process.env.NODE_ENV === "development";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

export default server;
