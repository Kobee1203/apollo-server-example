import { DbClient } from '../db/client';

export type Context = {
  dbClient: DbClient;
};

export type Pagination = {
  limit: number;
  offset: number;
}