import CategoriesChart from '../../components/CategoriesChart';
import RatingsTimeline from '../../components/RatingsTimeline';
import { useEffect, useState } from 'react';
import { getBooksByCategory } from '../../services/GoogleBooksService.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';

export default function Dashboard() {
  const [categoryRatings, setCategoryRatings] = useState<CategoryRatings[]>([]);
  const exampleCategories = ['fiction', 'romance', 'medical', 'engineering', 'cooking'];

  useEffect(() => {
    async function getRatingsByCategories(categories: string[]) {
      for (const category of categories) {
        const response = await getBooksByCategory({ category: category, orderBy: 'newest' });
        if (response !== undefined) {
          const rates = response.items
            .filter((item) => !!item.volumeInfo.averageRating)
            .map((item) => {
              return {
                category: category,
                rating: item.volumeInfo.averageRating,
              };
            });
          setCategoryRatings((prevState) => [...prevState].concat(rates));
        }
      }
    }

    getRatingsByCategories(exampleCategories);
  }, []);

  return (
    <div>
      <CategoriesChart categories={exampleCategories} ratingsData={categoryRatings} />
      <RatingsTimeline categories={exampleCategories} ratings={categoryRatings} />
    </div>
  );
}
