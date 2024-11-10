import { LineChart } from '@mui/x-charts';
import { GraphContainer } from './styles.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';

interface RatingsTimelinePros {
  ratings: CategoryRatings[];
  categories: string[];
}

export default function RatingsTimeline({ ratings, categories }: RatingsTimelinePros) {
  const chartData: { label: string; data: number[] }[] = categories.map((category) => {
    const categoryRates: number[] = ratings.reverse().map((rating) => {
      if (category === rating.category) {
        return rating.rating;
      }
      return 0;
    });
    return {
      label: category,
      data: categoryRates,
    };
  });
  return (
    <GraphContainer>
      <LineChart
        series={chartData}
        grid={{ vertical: true, horizontal: true }}
        yAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
      />
    </GraphContainer>
  );
}
