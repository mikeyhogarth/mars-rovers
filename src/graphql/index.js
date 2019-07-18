import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./schema";
import dotenv from "dotenv";
dotenv.config();

const isDevelopment = process.env.NODE_ENV === "development";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: isDevelopment,
  introspection: isDevelopment
});

export default server;
