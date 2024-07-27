import { ApolloServer } from '@apollo/server';
import gql from 'graphql-tag';
import { readFileSync } from 'fs';
import { join } from 'path';
import { resolvers } from './resolvers';

export const createServer = (): ApolloServer => {
  const typeDefs = gql(
    readFileSync(join(__dirname, '..', 'schema.graphql'), 'utf-8'),
  );

  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });
};
