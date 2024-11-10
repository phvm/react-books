export interface APIBook {
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    averageRating: number;
    publishedDate?: string;
  };
}

export interface GoogleAPIResponse {
  kind: string;
  items: APIBook[];
  totalItems: number;
}
