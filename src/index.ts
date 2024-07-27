import { createServer } from './server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { DbClient } from './db/client';

const server = createServer();

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    dbClient: new DbClient(),
    token: req.headers.token
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
