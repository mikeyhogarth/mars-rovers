const { ApolloServer, gql } = require("apollo-server-lambda");
const isDevelopment = process.env.NODE_ENV === 'development';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, graphql";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: isDevelopment,
  introspection: isDevelopment
});

exports.handler = server.createHandler();
