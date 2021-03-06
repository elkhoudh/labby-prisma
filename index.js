const { GraphQLServerLambda, GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const lambda = new GraphQLServerLambda({
  typeDefs: "schema.graphql",
  resolvers: {
    Mutation,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    prisma
  })
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
