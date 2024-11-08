const apiURL: string = 'https://www.googleapis.com/books/v1/volumes?';

export async function getVolumes({
  query,
  searchLimit = 10,
  orderBy = 'newest',
}: {
  query: string;
  searchLimit?: number;
  orderBy: string;
}) {
  const queryParams = new URLSearchParams({
    key: import.meta.env.VITE_API_KEY,
    q: query.replace(' ', '+'),
    maxResults: searchLimit.toString(),
    orderBy: orderBy,
  });
  try {
    const response = await fetch(apiURL + queryParams);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
