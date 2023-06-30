import { gql } from "apollo-server";

import { Resolvers } from "../types.codegen";

const typeDefs = gql`
  type Character {
    testString: String
  }
`;

const resolvers: Resolvers = {
  Character: {
    testString: (parent) => {
      return parent.testString;
    },
  },
};

export default { typeDefs, resolvers };
