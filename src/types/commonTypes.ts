export interface Book {
  id: string;
  title: string;
  author: string;
  categories: string | 'Indisponivel';
  avgRating: number | 'Indisponível';
}

export interface CategoryRatings {
  category: string;
  ratings: number[];
}
