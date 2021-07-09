const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const { join } = require("path");

const resolvers = require("../graphQL");

const typeDefs = readFileSync(
  join(__dirname, "../graphQL", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

function graphQL(app) {
  app.use(
    "/api/graphql-docs",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );
  app.use(
    "/api/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: false,
    })
  );
}

module.exports = graphQL;
