import "reflect-metadata"; // For type-graphql
import { ApolloServer } from "apollo-server-express";
import buildSchema from './schema';

export default async () => {
  const schema = await buildSchema();
  return new ApolloServer({ schema });
};
