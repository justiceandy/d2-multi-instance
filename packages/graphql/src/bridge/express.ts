import express from 'express';
import "reflect-metadata"; // For type-graphql
import { createServer } from 'http';
import { execute, subscribe } from "graphql";
import { ApolloServer } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import { SubscriptionServer } from "subscriptions-transport-ws";
import buildSchema from './schema';

export default async ({ port = 4000, app = null, bind = true }) => {
  const expressApp = app || express();
  const pubsub = new PubSub();
  const httpServer = createServer(expressApp);
  const schema = await buildSchema();
  const server = new ApolloServer({ schema });

  await server.start();
        server.applyMiddleware({ app: expressApp });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  bind ? httpServer.listen(port, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${port}${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${port}${server.graphqlPath}`
    );
  }): null;
};
