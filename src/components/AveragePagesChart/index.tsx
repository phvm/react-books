import { PieChart } from '@mui/x-charts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { firstCharToUppercase } from '../../utils/stringUtils.ts';
import { ChartContainer } from './styles.ts';
import { motion } from 'framer-motion';

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
    <ChartContainer
      as={motion.div}
      transition={{ ease: 'linear', duration: 0.5 }}
      initial={{ opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}>
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
