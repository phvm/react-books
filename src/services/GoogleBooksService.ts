import { GoogleAPIResponse } from '../types/apiTypes.ts';

const apiURL: string = 'https://www.googleapis.com/books/v1/volumes?';

export async function getVolumes({
  query,
  searchLimit = 40,
  orderBy = 'relevance',
  startIndex = 0,
}: {
  query: string;
  searchLimit?: number;
  orderBy?: 'relevance' | 'newest';
  startIndex?: number;
}): Promise<GoogleAPIResponse | undefined> {
  const queryParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    q: query.replace(' ', '+'),
    maxResults: searchLimit.toString(),
    orderBy: orderBy,
    startIndex: startIndex.toString(),
    fields: 'items(volumeInfo(title, authors, categories, avgRating))',
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
  searchLimit = 40,
  orderBy = 'relevance',
  startIndex = 0,
}: {
  title?: string;
  author?: string;
  searchLimit?: number;
  orderBy?: 'relevance' | 'newest';
  startIndex?: number;
}) {
  const queryParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    q: `intitle:${title.replace(' ', '+')}+inauthor:${author.replace(' ', '+')}`,
    maxResults: searchLimit.toString(),
    orderBy: orderBy,
    startIndex: startIndex.toString(),
    fields: 'items(volumeInfo(title, authors, categories, avgRating))',
  });
  try {
    const response = await fetch(apiURL + queryParams);
    return (await response.json()) as GoogleAPIResponse;
  } catch (error) {
    console.error(error);
  }
}

export async function getBooksByCategory({
  category,
  searchLimit = 40,
  orderBy = 'relevance',
  startIndex = 0,
}: {
  category: string;
  searchLimit?: number;
  orderBy?: 'relevance' | 'newest';
  startIndex?: number;
}) {
  const queryParams = new URLSearchParams({
    q: `subject:${category}`,
    searchLimit: searchLimit.toString(),
    orderBy,
    key: import.meta.env.VITE_API_KEY,
    startIndex: startIndex.toString(),
    fields: 'items(volumeInfo(title, authors, categories, averageRating, publishedDate))',
  });
  try {
    const response = await fetch(apiURL + queryParams);
    return (await response.json()) as GoogleAPIResponse;
  } catch (error) {
    console.error(error);
  }
}
