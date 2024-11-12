export interface APIBook {
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    averageRating: number;
    publishedDate: Date;
    pageCount: number;
  };
}

export interface GoogleAPIResponse {
  kind: string;
  items: APIBook[];
  totalItems: number;
}
