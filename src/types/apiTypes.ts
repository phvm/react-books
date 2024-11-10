export interface APIBook {
  title: string;
  authors: string[];
  categories: string[] | undefined;
  averageRating: number;
  publishedDate?: string;
}

export interface GoogleAPIResponse {
  kind: string;
  items: APIBook[];
  totalItems: number;
}
