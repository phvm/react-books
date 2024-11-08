export interface Book {
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
    categories: string[];
    averageRating: number;
    ratingCount: number;
  };
}

export interface GoogleAPIResponse {
  kind: string;
  items: Book[];
  totalItems: number;
}
