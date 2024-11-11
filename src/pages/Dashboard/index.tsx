import CategoriesChart from '../../components/CategoriesChart';
import RatingsTimeline from '../../components/RatingsTimeline';
import AveragePagesChart from '../../components/AveragePagesChart';
import { useEffect, useState } from 'react';
import { getBooksByCategory } from '../../services/GoogleBooksService.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { APIBook } from '../../types/apiTypes.ts';

const exampleCategories = ['fiction', 'romance', 'medical', 'engineering', 'cooking', 'comedy'];

export default function Dashboard() {
  const [categoryRatings, setCategoryRatings] = useState<CategoryRatings[]>([]);

  useEffect(() => {
    async function getRatingsByCategories(categories: string[]) {
      for (const category of categories) {
        const response = await getBooksByCategory({ category: category, orderBy: 'relevance' });
        if (response !== undefined) {
          const rates: CategoryRatings[] = response.items
            .filter((item: APIBook): boolean => !!item.volumeInfo.averageRating)
            .map((item: APIBook): CategoryRatings => {
              return {
                category: category,
                rating: item.volumeInfo.averageRating,
                pageCount: item.volumeInfo.pageCount,
              };
            });
          setCategoryRatings((prevState) => [...prevState].concat(rates));
        }
      }
    }

    getRatingsByCategories(exampleCategories);
  }, []);

  return (
    <main>
      <CategoriesChart categories={exampleCategories} ratingsData={categoryRatings} />
      <AveragePagesChart categories={exampleCategories} ratingsData={categoryRatings} />{' '}
      <RatingsTimeline categories={exampleCategories} ratings={categoryRatings} />
    </main>
  );
}
