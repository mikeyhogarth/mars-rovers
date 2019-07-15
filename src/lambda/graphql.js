const { ApolloServer, gql } = require("apollo-server-lambda");
const isProduction = process.env.NODE_ENV === 'production';

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

console.log("Productin?", isProduction)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !isProduction,
  introspection: !isProduction

});

exports.handler = server.createHandler();
