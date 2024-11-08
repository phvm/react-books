import { GoogleAPIResponse } from '../types/apiTypes.ts';

const apiURL: string = 'https://www.googleapis.com/books/v1/volumes?';

export async function getVolumes({
  query,
  searchLimit = 10,
  orderBy = 'relevance',
}: {
  query: string;
  searchLimit?: number;
  orderBy?: string;
}): Promise<GoogleAPIResponse | undefined> {
  const queryParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    q: query.replace(' ', '+'),
    maxResults: searchLimit.toString(),
    orderBy: orderBy,
  });
  try {
    const response = await fetch(apiURL + queryParams);
    return (await response.json()) as GoogleAPIResponse;
  } catch (error) {
    console.error(error);
  }
}

export async function getByAuthorAndTitle({
  title = '',
  author = '',
  searchLimit = 10,
  orderBy = 'newest',
}: {
  title?: string;
  author?: string;
  searchLimit?: number;
  orderBy?: string;
}) {
  const queryParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    q: `intitle:${title.replace(' ', '+')}+inauthor:${author.replace(' ', '+')}`,
    maxResults: searchLimit.toString(),
    orderBy: orderBy,
  });
  try {
    const response = await fetch(apiURL + queryParams);
    return (await response.json()) as GoogleAPIResponse;
  } catch (error) {
    console.error(error);
  }
}
