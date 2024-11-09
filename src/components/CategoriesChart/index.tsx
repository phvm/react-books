import { BarChart } from '@mui/x-charts';
import { ChartContainer } from './styles.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';

interface CategoriesChartProps {
  ratingsData: CategoryRatings[];
}

export default function CategoriesChart({ ratingsData }: CategoriesChartProps) {
  const chartData = ratingsData.map((ratingData) => {
    return {
      data: ratingData.ratings,
      label: ratingData.category,
    };
  });

  console.log(chartData);
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
