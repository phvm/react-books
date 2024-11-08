export interface APIBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[] | undefined;
    averageRating: number | undefined;
    ratingCount: number;
  };
}

export interface GoogleAPIResponse {
  kind: string;
  items: APIBook[];
  totalItems: number;
}
