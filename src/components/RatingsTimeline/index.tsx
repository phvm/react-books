import { LineChart } from '@mui/x-charts';
import { ChartTitle, GraphContainer } from './styles.ts';
import { CategoryRatings } from '../../types/commonTypes.ts';
import { firstCharToUppercase } from '../../utils/stringUtils.ts';
import { motion } from 'framer-motion';

interface RatingsTimelinePros {
  ratings: CategoryRatings[];
  categories: string[];
}

export default function RatingsTimeline({ ratings, categories }: RatingsTimelinePros) {
  const ratedVolume = ratings
    .filter((item): boolean => !!item.rating)
    .sort((book1, book2) => {
      const year1 = new Date(book1.publishedDate).getFullYear();
      const year2 = new Date(book2.publishedDate).getFullYear();
      return year1 - year2;
    });

  const chartData: { label: string; data: number[] }[] = categories.map((category) => {
    const categoryRates: number[] = ratedVolume
      .map((rating) => {
        if (category === rating.category) {
          return rating.rating;
        }
        return 0;
      })
      .filter((item) => item !== 0);
    return {
      label: firstCharToUppercase(category),
      data: categoryRates,
    };
  });

  return (
    <GraphContainer
      transition={{ ease: 'linear', duration: 0.7 }}
      as={motion.div}
      whileHover={{ scale: 1.05, transition: { ease: 'easeIn', duration: 0.2 } }}
      initial={{ opacity: 0, scale: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}>
      <ChartTitle>Ratings per category timeline</ChartTitle>
      <LineChart
        series={chartData}
        grid={{ vertical: true, horizontal: true }}
        yAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
      />
    </GraphContainer>
  );
}
