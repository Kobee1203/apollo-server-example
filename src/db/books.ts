import {
  AUTHOR_ID_1,
  AUTHOR_ID_10,
  AUTHOR_ID_2,
  AUTHOR_ID_3,
  AUTHOR_ID_4,
  AUTHOR_ID_5,
  AUTHOR_ID_6,
  AUTHOR_ID_7,
  AUTHOR_ID_8,
  AUTHOR_ID_9,
} from './authors';

export type BookTable = Record<string, BookRow>;

export type BookRow = {
  id: string;
  title: string;
  authorId: string;
  publicationDate: string | null;
};

export const BOOK_ID_1 = crypto.randomUUID();
export const BOOK_ID_2 = crypto.randomUUID();
export const BOOK_ID_3 = crypto.randomUUID();
export const BOOK_ID_4 = crypto.randomUUID();
export const BOOK_ID_5 = crypto.randomUUID();
export const BOOK_ID_6 = crypto.randomUUID();
export const BOOK_ID_7 = crypto.randomUUID();
export const BOOK_ID_8 = crypto.randomUUID();
export const BOOK_ID_9 = crypto.randomUUID();
export const BOOK_ID_10 = crypto.randomUUID();
export const BOOK_ID_11 = crypto.randomUUID();
export const BOOK_ID_12 = crypto.randomUUID();
export const BOOK_ID_13 = crypto.randomUUID();
export const BOOK_ID_14 = crypto.randomUUID();
export const BOOK_ID_15 = crypto.randomUUID();
export const BOOK_ID_16 = crypto.randomUUID();
export const BOOK_ID_17 = crypto.randomUUID();
export const BOOK_ID_18 = crypto.randomUUID();
export const BOOK_ID_19 = crypto.randomUUID();

export const BOOKS: BookTable = {
  [BOOK_ID_1]: {
    id: BOOK_ID_1,
    title: 'The Hitchhikers\'s Guide to the Galaxy',
    authorId: AUTHOR_ID_1,
    publicationDate: new Date('1979-10-12').toISOString(),
  },
  [BOOK_ID_2]: {
    id: BOOK_ID_2,
    title: 'Restaurant at the End of the Universe',
    authorId: AUTHOR_ID_1,
    publicationDate: new Date('1980-10-01').toISOString(),
  },
  [BOOK_ID_3]: {
    id: BOOK_ID_3,
    title: 'The subtle art of not giving a fuck',
    authorId: AUTHOR_ID_2,
    publicationDate: new Date('2016-09-13').toISOString(),
  },
  [BOOK_ID_4]: {
    id: BOOK_ID_4,
    title: 'The Pragmatic Programmer',
    authorId: AUTHOR_ID_3,
    publicationDate: new Date('1999-11-24').toISOString(),
  },
  [BOOK_ID_5]: {
    id: BOOK_ID_5,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2008-08-01').toISOString(),
  },
  [BOOK_ID_6]: {
    id: BOOK_ID_6,
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2011-03-13').toISOString(),
  },
  [BOOK_ID_7]: {
    id: BOOK_ID_7,
    title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2017-09-17').toISOString(),
  },
  [BOOK_ID_8]: {
    id: BOOK_ID_8,
    title: 'Clean Agile: Back to Basics',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2019-10-17').toISOString(),
  },
  [BOOK_ID_9]: {
    id: BOOK_ID_9,
    title: 'The robots',
    authorId: AUTHOR_ID_5,
    publicationDate: new Date('1950-12-02').toISOString(),
  },
  [BOOK_ID_10]: {
    id: BOOK_ID_10,
    title: 'The Rest of the Robots',
    authorId: AUTHOR_ID_5,
    publicationDate: null,
  },
  [BOOK_ID_11]: {
    id: BOOK_ID_11,
    title: 'Ready Player One',
    authorId: AUTHOR_ID_6,
    publicationDate: new Date('2011-08-16').toISOString(),
  },
  [BOOK_ID_12]: {
    id: BOOK_ID_12,
    title: 'Ready Player Two',
    authorId: AUTHOR_ID_6,
    publicationDate: new Date('2020-11-24').toISOString(),
  },
  [BOOK_ID_13]: {
    id: BOOK_ID_13,
    title: 'The Hobbit',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1937-09-21').toISOString(),
  },
  [BOOK_ID_14]: {
    id: BOOK_ID_14,
    title: 'The Fellowship of the Ring',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1954-07-29').toISOString(),
  },
  [BOOK_ID_15]: {
    id: BOOK_ID_15,
    title: 'The Two Towers',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1954-11-11').toISOString(),
  },
  [BOOK_ID_16]: {
    id: BOOK_ID_16,
    title: 'The Return of the King',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1955-10-20').toISOString(),
  },
  [BOOK_ID_17]: {
    id: BOOK_ID_17,
    title: 'Cryptonomicon',
    authorId: AUTHOR_ID_8,
    publicationDate: new Date('2002-11-05').toISOString(),
  },
  [BOOK_ID_18]: {
    id: BOOK_ID_18,
    title: 'Does It Matter?',
    authorId: AUTHOR_ID_9,
    publicationDate: new Date('2004-05-18').toISOString(),
  },
  [BOOK_ID_19]: {
    id: BOOK_ID_19,
    title: 'Frankenstein',
    authorId: AUTHOR_ID_10,
    publicationDate: new Date('1818-01-01').toISOString(),
  },
};
