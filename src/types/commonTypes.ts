export interface Book {
  id: number;
  title: string;
  author: string;
  categories: string | 'Indisponivel';
  avgRating: number | 'Indisponível';
}

export interface CategoryRatings {
  category: string;
  rating: number;
  pageCount: number;
}
