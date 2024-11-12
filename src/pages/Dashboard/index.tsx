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
        if (response !== undefined && response.items !== undefined) {
          const rates: CategoryRatings[] = response.items.map((item: APIBook): CategoryRatings => {
            return {
              category: category,
              rating: item.volumeInfo.averageRating,
              pageCount: item.volumeInfo.pageCount,
              publishedDate: item.volumeInfo.publishedDate,
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
      <CategoriesChart
        aria-label="Book ratings distribution by categories"
        aria-description="Chart showing how books in different categories are rated on average, from 1 to 5 stars"
        categories={exampleCategories}
        ratingsData={categoryRatings}
      />
      <AveragePagesChart
        aria-label="Book average pages by categories"
        aria-description="Chart showing how many average pages books in different categories have"
        categories={exampleCategories}
        ratingsData={categoryRatings}
      />
      <RatingsTimeline
        aria-label="Book ratings timeline by categories"
        aria-description="Chart showing the timeline of books ratings by categories over the time"
        categories={exampleCategories}
        ratings={categoryRatings}
      />
    </main>
  );
}
