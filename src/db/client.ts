import { BOOKS, BookRow } from './books';
import { fakeAsync } from './utils';
import { AUTHORS, AuthorRow } from './authors';

export class DbClient {
  getBooks(args?: { authorId?: string }): Promise<BookRow[]> {
    return fakeAsync(() =>
      args && args.authorId
        ? Object.values(BOOKS).filter(
          ({ authorId }) => authorId === args.authorId,
        )
        : Object.values(BOOKS),
    );
  }

  getBook(id: string): Promise<BookRow | undefined> {
    return fakeAsync(() => BOOKS[id]);
  }

  createBook(data: { title: string; authorId: string, publicationDate?: string | null }): Promise<BookRow> {
    const { title, authorId, publicationDate } = data;
    return fakeAsync(() => {
      const id = crypto.randomUUID();
      BOOKS[id] = {
        id,
        title,
        authorId,
        publicationDate: publicationDate || null,
      };
      return BOOKS[id];
    });
  }

  getAuthors(): Promise<AuthorRow[]> {
    return fakeAsync(() => Object.values(AUTHORS));
  }

  getAuthor(id: string): Promise<AuthorRow | undefined> {
    return fakeAsync(() => AUTHORS[id]);
  }

  createAuthor(data: { name: string; dateOfBirth?: string | null }) {
    const { name, dateOfBirth } = data;
    return fakeAsync(() => {
      const id = crypto.randomUUID();
      AUTHORS[id] = {
        id,
        name,
        dateOfBirth: dateOfBirth || null,
      };
      return AUTHORS[id];
    });
  }
}
