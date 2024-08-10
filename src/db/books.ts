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
  coverUrl: string | null;
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
    coverUrl: 'https://i.postimg.cc/7hRZcPhT/The-Hitchhikers-s-Guide-to-the-Galaxy.jpg',
  },
  [BOOK_ID_2]: {
    id: BOOK_ID_2,
    title: 'Restaurant at the End of the Universe',
    authorId: AUTHOR_ID_1,
    publicationDate: new Date('1980-10-01').toISOString(),
    coverUrl: 'https://i.postimg.cc/KYhRxYNP/Restaurant-At-The-End-Of-The-Universe.jpg',
  },
  [BOOK_ID_3]: {
    id: BOOK_ID_3,
    title: 'The subtle art of not giving a fuck',
    authorId: AUTHOR_ID_2,
    publicationDate: new Date('2016-09-13').toISOString(),
    coverUrl: 'https://i.postimg.cc/J49h5hSf/The-subtle-art-of-not-giving-a-fuck.jpg',
  },
  [BOOK_ID_4]: {
    id: BOOK_ID_4,
    title: 'The Pragmatic Programmer',
    authorId: AUTHOR_ID_3,
    publicationDate: new Date('1999-11-24').toISOString(),
    coverUrl: 'https://i.postimg.cc/d3304ZsY/The-Pragmatic-Programmer.jpg',
  },
  [BOOK_ID_5]: {
    id: BOOK_ID_5,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2008-08-01').toISOString(),
    coverUrl: 'https://i.postimg.cc/wvHycBRq/Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship.jpg',
  },
  [BOOK_ID_6]: {
    id: BOOK_ID_6,
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2011-03-13').toISOString(),
    coverUrl: 'https://i.postimg.cc/R01qFzsj/The-Clean-Coder-A-Code-of-Conduct-for-Professional-Programmers.jpg',
  },
  [BOOK_ID_7]: {
    id: BOOK_ID_7,
    title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2017-09-17').toISOString(),
    coverUrl: 'https://i.postimg.cc/VvkJpHF2/Clean-Architecture-A-Craftsman-s-Guide-to-Software-Structure-and-Design.jpg',
  },
  [BOOK_ID_8]: {
    id: BOOK_ID_8,
    title: 'Clean Agile: Back to Basics',
    authorId: AUTHOR_ID_4,
    publicationDate: new Date('2019-10-17').toISOString(),
    coverUrl: 'https://i.postimg.cc/V6RS7cXj/Clean-Agile-Back-to-Basics.jpg',
  },
  [BOOK_ID_9]: {
    id: BOOK_ID_9,
    title: 'The robots',
    authorId: AUTHOR_ID_5,
    publicationDate: new Date('1950-12-02').toISOString(),
    coverUrl: 'https://i.postimg.cc/MKcTBB30/The-robots.jpg',
  },
  [BOOK_ID_10]: {
    id: BOOK_ID_10,
    title: 'The Rest of the Robots',
    authorId: AUTHOR_ID_5,
    publicationDate: null,
    coverUrl: 'https://i.postimg.cc/hGnPN5DM/The-Rest-Of-The-Robots.jpg',
  },
  [BOOK_ID_11]: {
    id: BOOK_ID_11,
    title: 'Ready Player One',
    authorId: AUTHOR_ID_6,
    publicationDate: new Date('2011-08-16').toISOString(),
    coverUrl: 'https://i.postimg.cc/zGgVshnD/Ready-Player-One.jpg',
  },
  [BOOK_ID_12]: {
    id: BOOK_ID_12,
    title: 'Ready Player Two',
    authorId: AUTHOR_ID_6,
    publicationDate: new Date('2020-11-24').toISOString(),
    coverUrl: 'https://i.postimg.cc/5NjHmTyC/Ready-Player-Two.jpg',
  },
  [BOOK_ID_13]: {
    id: BOOK_ID_13,
    title: 'The Hobbit',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1937-09-21').toISOString(),
    coverUrl: 'https://i.postimg.cc/B6M6TBGp/The-Hobbit.jpg',
  },
  [BOOK_ID_14]: {
    id: BOOK_ID_14,
    title: 'The Fellowship of the Ring',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1954-07-29').toISOString(),
    coverUrl: 'https://i.postimg.cc/xC08NFBq/The-Fellowship-of-the-Ring.jpg',
  },
  [BOOK_ID_15]: {
    id: BOOK_ID_15,
    title: 'The Two Towers',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1954-11-11').toISOString(),
    coverUrl: 'https://i.postimg.cc/Qd1d433H/The-Two-Towers.jpg',
  },
  [BOOK_ID_16]: {
    id: BOOK_ID_16,
    title: 'The Return of the King',
    authorId: AUTHOR_ID_7,
    publicationDate: new Date('1955-10-20').toISOString(),
    coverUrl: 'https://i.postimg.cc/pVcryCCX/The-Return-of-the-King.jpg',
  },
  [BOOK_ID_17]: {
    id: BOOK_ID_17,
    title: 'Cryptonomicon',
    authorId: AUTHOR_ID_8,
    publicationDate: new Date('2002-11-05').toISOString(),
    coverUrl: 'https://i.postimg.cc/s25GhWXH/Cryptonomicon.jpg',
  },
  [BOOK_ID_18]: {
    id: BOOK_ID_18,
    title: 'Does It Matter?',
    authorId: AUTHOR_ID_9,
    publicationDate: new Date('2004-05-18').toISOString(),
    coverUrl: 'https://i.postimg.cc/pX7mcC51/Does-It-Matter.jpg',
  },
  [BOOK_ID_19]: {
    id: BOOK_ID_19,
    title: 'Frankenstein',
    authorId: AUTHOR_ID_10,
    publicationDate: new Date('1818-01-01').toISOString(),
    coverUrl: 'https://i.postimg.cc/FFTd3Nrv/Frankenstein.jpg',
  },
};
