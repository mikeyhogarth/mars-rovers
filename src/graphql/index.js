import { ApolloServer } from "apollo-server-lambda";
import schema from "./schema";
import NASAGeneLabAPI from "./NasaGeneLabAPI";

import dotenv from "dotenv";
dotenv.config();

const isDevelopment = process.env.NODE_ENV === "development";

const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      nasaGeneLabAPI: new NASAGeneLabAPI()
    };
  },
  playground: isDevelopment,
  introspection: isDevelopment
});

export default server;
