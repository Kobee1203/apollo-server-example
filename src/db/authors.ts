export type AuthorTable = Record<string, AuthorRow>;

export type AuthorRow = {
  id: string;
  name: string;
  dateOfBirth: string | null;
};

export const AUTHOR_ID_1 = crypto.randomUUID();
export const AUTHOR_ID_2 = crypto.randomUUID();
export const AUTHOR_ID_3 = crypto.randomUUID();
export const AUTHOR_ID_4 = crypto.randomUUID();
export const AUTHOR_ID_5 = crypto.randomUUID();
export const AUTHOR_ID_6 = crypto.randomUUID();
export const AUTHOR_ID_7 = crypto.randomUUID();
export const AUTHOR_ID_8 = crypto.randomUUID();
export const AUTHOR_ID_9 = crypto.randomUUID();
export const AUTHOR_ID_10 = crypto.randomUUID();

export const AUTHORS: AuthorTable = {
  [AUTHOR_ID_1]: {
    id: AUTHOR_ID_1,
    name: 'Douglas Adams',
    dateOfBirth: new Date('1955-03-11').toISOString(),
  },
  [AUTHOR_ID_2]: {
    id: AUTHOR_ID_2,
    name: 'Mark Manson',
    dateOfBirth: new Date('1984-03-09').toISOString(),
  },
  [AUTHOR_ID_3]: {
    id: AUTHOR_ID_3,
    name: 'Andrew Hunt & David Thomas',
    dateOfBirth: null,
  },
  [AUTHOR_ID_4]: {
    id: AUTHOR_ID_4,
    name: 'Robert C. Martin',
    dateOfBirth: new Date('1952-12-05').toISOString(),
  },
  [AUTHOR_ID_5]: {
    id: AUTHOR_ID_5,
    name: 'Isaac Asimov',
    dateOfBirth: null,
  },
  [AUTHOR_ID_6]: {
    id: AUTHOR_ID_6,
    name: 'Ernest Cline',
    dateOfBirth: new Date('1972-03-29').toISOString(),
  },
  [AUTHOR_ID_7]: {
    id: AUTHOR_ID_7,
    name: 'J.R.R. Tolkien',
    dateOfBirth: new Date('1892-01-03').toISOString(),
  },
  [AUTHOR_ID_8]: {
    id: AUTHOR_ID_8,
    name: 'Neal Stephenson',
    dateOfBirth: new Date('1959-10-31').toISOString(),
  },
  [AUTHOR_ID_9]: {
    id: AUTHOR_ID_9,
    name: 'Nicholas G. Carr',
    dateOfBirth: new Date('1959-01-07').toISOString(),
  },
  [AUTHOR_ID_10]: {
    id: AUTHOR_ID_10,
    name: 'Mary Shelley',
    dateOfBirth: new Date('1797-08-30').toISOString(),
  },
};
