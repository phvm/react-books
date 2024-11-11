import { PieChart } from '@mui/x-charts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { firstCharToUppercase } from '../../utils/stringUtils.ts';
import { ChartContainer } from './styles.ts';

interface AveragePagesChartProps {
  categories: string[];
  ratingsData: CategoryRatings[];
}

export default function AveragePagesChart({ categories, ratingsData }: AveragePagesChartProps) {
  const chartData = categories.map((category) => {
    const categoryRates = ratingsData.map((rating): number => {
      if (category === rating.category) {
        return rating.pageCount;
      }
      return 0;
    });
    const averageRates: number = categoryRates.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return {
      label: firstCharToUppercase(category),
      value: averageRates,
    };
  });
  return (
    <ChartContainer>
      <PieChart
        series={[
          {
            data: chartData,
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            highlightScope: { fade: 'global', highlight: 'item' },
          },
        ]}
      />
    </ChartContainer>
  );
}
