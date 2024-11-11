import { BarChart } from '@mui/x-charts';
import { ChartContainer } from './styles.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { firstCharToUppercase } from '../../utils/stringUtils.ts';

interface CategoriesChartProps {
  ratingsData: CategoryRatings[];
  categories: string[];
}

export default function CategoriesChart({ ratingsData, categories }: CategoriesChartProps) {
  const data: { category: string; ratings: number[] }[] = categories.map((category) => {
    const rates: number[] = [0, 0, 0, 0, 0, 0];
    ratingsData.forEach((ratings) => {
      if (category === ratings.category) {
        rates[Math.round(ratings.rating)] += 1;
      }
    });
    return {
      category: category,
      ratings: rates,
    };
  });
  const chartData: { label: string; data: number[] }[] = data.map((ratingData) => {
    return {
      label: firstCharToUppercase(ratingData.category),
      data: ratingData.ratings,
    };
  });

  return (
    <ChartContainer>
      <BarChart
        yAxis={[{ label: 'N° de Avaliações' }]}
        xAxis={[{ scaleType: 'band', data: [0, 1, 2, 3, 4, 5], label: 'Avaliação' }]}
        series={chartData}
        grid={{ horizontal: true }}
      />
    </ChartContainer>
  );
}
