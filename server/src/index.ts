import { ApolloServer } from "apollo-server";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";

import { schema } from "./schema";

dotenv.config();

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const server = new ApolloServer({ schema, context: { driver }, cors: true });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
