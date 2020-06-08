import { gql } from "apollo-server";
import { makeAugmentedSchema } from "neo4j-graphql-js";
import { print } from "graphql/language/printer";

const apolloTypeDefs = gql`
  type Node {
    id: ID!
    name: String!
    description: String
    children: [Node] @relation(name: "PARENT_TO", direction: "OUT")
  }
`;

const typeDefs = print(apolloTypeDefs);

export const schema = makeAugmentedSchema({ typeDefs });
