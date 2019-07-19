import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type SearchResult {
    totalCount: Int
    results: [Study]
  }

  type Query {
    search(from: Int, size: Int, animal: String): SearchResult
  }
`;

export const resolvers = {
  Query: {
    search: async (_, args, { dataSources }) => {
      return dataSources.nasaGeneLabAPI.search(args);
    }
  },
  SearchResult: {
    totalCount(obj) {
      return obj.hits.total;
    },
    results(obj) {
      return obj.hits.hits;
    }
  }
};
