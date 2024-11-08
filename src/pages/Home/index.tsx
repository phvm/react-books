import { Container } from './styles.ts';
import BooksTable from '../../components/Table';
import { useEffect, useState } from 'react';
import { getVolumes } from '../../services/GoogleBooksService.ts';
import { APIBook } from '../../types/apiTypes.ts';
import { Book } from '../../types/commonTypes.ts';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function getBooks() {
      const response = await getVolumes({ query: 'Dante', searchLimit: 20 });
      if (response !== undefined) {
        const data: Book[] = response.items.map((item: APIBook) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors.join(', '),
            categories: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Indisponivel',
            avgRating: item.volumeInfo.averageRating ?? 'Indisponível',
          };
        });
        setBooks(data);
      }
    }

    getBooks();
  }, []);

  return (
    <Container>
      <BooksTable books={books} />
    </Container>
  );
}
