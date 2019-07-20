import { ApolloServer } from "apollo-server-lambda";
import schema from "./schema";
import NasaMarsRoversAPI from "./NasaMarsRoversAPI";

import dotenv from "dotenv";
dotenv.config();

const isDevelopment = process.env.NODE_ENV === "development";

const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      nasaMarsRoversAPI: new NasaMarsRoversAPI()
    };
  },
  playground: isDevelopment,
  introspection: isDevelopment
});

export default server;
