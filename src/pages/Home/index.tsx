import { Container } from './styles.ts';
import BooksTable from '../../components/Table';
import { useEffect, useState } from 'react';
import { getVolumes } from '../../services/GoogleBooksService.ts';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    function getBooks() {
      const data = getVolumes({ query: 'Dante', searchLimit: 20 });
    }

    console.log(getVolumes({ query: 'Dante', searchLimit: 20 }));
  }, []);

  return (
    <Container>
      <BooksTable></BooksTable>
    </Container>
  );
}
