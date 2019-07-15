const { ApolloServer, gql } = require("apollo-server-lambda");
const isProduction = process.env.CONTEXT === 'production';

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
  playground: !isProduction,
  introspection: !isProduction

});

exports.handler = server.createHandler();
