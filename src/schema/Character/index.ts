import { gql } from "apollo-server";

import isLukeSkywalker from "./isLukeSkywalker";
import planet from "./planet";
import testString from "./testString";
const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
  }
`;
export default {
  typeDefs: [
    typeDefs,
    isLukeSkywalker.typeDefs,
    planet.typeDefs,
    testString.typeDefs,
  ],
  resolvers: [
    isLukeSkywalker.resolvers,
    planet.resolvers,
    testString.resolvers,
  ],
};
