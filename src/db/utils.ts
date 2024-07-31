import { Pagination } from '../resolvers/types';

export function fakeAsync<T>(
  callback: () => T,
  maxDelay: number = 800,
): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = callback();
      resolve(result);
    }, Math.random() * maxDelay);
  });
}

/**
 * Function to slice an array given a pagination (limit and offset).
 *
 * @param array input array
 * @param pagination 'limit' how many records to return + 'offset' to discard elements
 * @returns sliced array or empty if input is null or has length = 0 or even if the params (limit/offset) exceeds the array length
 */
export function paginate<T>(array: T[], pagination?: Pagination): T[] {
  if (!pagination) return array;

  if (!array) return [];

  const length = array.length;

  if (!length) {
    return [];
  }
  if (pagination.offset > length - 1) {
    return [];
  }

  const start = Math.min(length - 1, pagination.offset);
  const end = Math.min(length, pagination.offset + pagination.limit);

  return array.slice(start, end);
}