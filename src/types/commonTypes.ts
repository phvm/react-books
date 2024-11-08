export interface Book {
  id: string;
  title: string;
  author: string;
  categories: string | 'Indisponivel';
  avgRating: number | 'Indisponível';
}
