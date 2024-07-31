import { QueryResolvers } from '../generated/graphql';
import { convertAuthor, convertBook } from '../utils';
import { Pagination } from './types';

export const queryResolvers: QueryResolvers = {
  books: async (_, { limit, offset }, { dbClient }) => {
    const pagination: Pagination = limit ? { limit, offset: offset ?? 0 } : undefined;
    const books = await dbClient.getBooks(pagination ? { pagination } : undefined);
    return books.map(convertBook);
  },

  book: async (_, { id }, { dbClient }) => {
    const book = await dbClient.getBook(id);
    if (book == null) {
      return null;
    }
    return convertBook(book);
  },

  authors: async (_, __, { dbClient }) => {
    const authors = await dbClient.getAuthors();
    return authors.map(convertAuthor);
  },

  author: async (_, { id }, { dbClient }) => {
    const author = await dbClient.getAuthor(id);
    return author && convertAuthor(author);
  },
};
