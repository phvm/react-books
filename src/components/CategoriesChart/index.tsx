import { BarChart } from '@mui/x-charts';
import { ChartContainer, ChartTitle } from './styles.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { firstCharToUppercase } from '../../utils/stringUtils.ts';
import { motion } from 'framer-motion';

interface CategoriesChartProps {
  ratingsData: CategoryRatings[];
  categories: string[];
}

export default function CategoriesChart({ ratingsData, categories }: CategoriesChartProps) {
  const ratedVolume = ratingsData.filter((item): boolean => !!item.rating);
  const data: { category: string; ratings: number[] }[] = categories.map((category) => {
    const rates: number[] = [0, 0, 0, 0, 0, 0];
    ratedVolume.forEach((ratings) => {
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
    <ChartContainer
      as={motion.div}
      transition={{ ease: 'linear', duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      initial={{ opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}>
      <ChartTitle>Ratings distribution per category</ChartTitle>
      <BarChart
        yAxis={[{ label: 'Ratings' }]}
        xAxis={[{ scaleType: 'band', data: [0, 1, 2, 3, 4, 5], label: 'Rate' }]}
        series={chartData}
        grid={{ horizontal: true }}
      />
    </ChartContainer>
  );
}
