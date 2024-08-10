import { BookRow, BOOKS } from './books';
import { fakeAsync, paginate } from './utils';
import { AuthorRow, AUTHORS } from './authors';
import { Pagination } from '../resolvers/types';

export class DbClient {
  getBooks(args?: { authorId?: string, pagination?: Pagination }): Promise<BookRow[]> {
    return fakeAsync(() =>
      paginate(
        args?.authorId
          ? Object.values(BOOKS).filter(({ authorId }) => authorId === args.authorId)
          : Object.values(BOOKS),
        args?.pagination,
      ),
    );
  }

  getBook(id: string): Promise<BookRow | undefined> {
    return fakeAsync(() => BOOKS[id]);
  }

  createBook(data: { title: string; authorId: string, publicationDate?: string | null, coverUrl?: string | null }): Promise<BookRow> {
    const { title, authorId, publicationDate, coverUrl } = data;
    return fakeAsync(() => {
      const id = crypto.randomUUID();
      BOOKS[id] = {
        id,
        title,
        authorId,
        publicationDate: publicationDate || null,
        coverUrl: coverUrl ?? 'https://i.postimg.cc/6qb8XLjq/default.jpg',
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

  createAuthor(data: { name: string; dateOfBirth?: string | null; photoUrl?: string | null }): Promise<AuthorRow> {
    const { name, photoUrl, dateOfBirth } = data;
    return fakeAsync(() => {
      const id = crypto.randomUUID();
      AUTHORS[id] = {
        id,
        name,
        dateOfBirth: dateOfBirth || null,
        photoUrl: photoUrl ?? 'https://i.postimg.cc/Wzh4Xc5f/default-photo.jpg',
      };
      return AUTHORS[id];
    });
  }
}
