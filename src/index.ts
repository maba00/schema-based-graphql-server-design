import { ApolloServer } from "apollo-server";

import context from "./context";
import schema from "./schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";

let plugins = [];
plugins = [ApolloServerPluginLandingPageGraphQLPlayground()];

const server = new ApolloServer({
  context: () => context,
  schema,
  introspection: true,
  plugins,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url} 🚀`);
  })
  .catch((err) => {
    throw new Error(err as string);
  });
