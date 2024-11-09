import { Container, InputsContainer } from './styles.ts';
import BooksTable from '../../components/Table';
import { useEffect, useState } from 'react';
import { getVolumes } from '../../services/GoogleBooksService.ts';
import { APIBook } from '../../types/apiTypes.ts';
import { Book } from '../../types/commonTypes.ts';
import SearchFilter from '../../components/SearchFilter';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  function onTitleChange(title: string): void {
    setTitle(title);
  }

  function onAuthorChange(author: string): void {
    setAuthor(author);
  }

  useEffect(() => {
    async function getBooks() {
      const response = await getVolumes({ query: ' ', searchLimit: 20 });
      if (response !== undefined) {
        const data: Book[] = response.items.map((item: APIBook) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Indisponivel',
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
      <InputsContainer>
        <SearchFilter
          placeholder="Título"
          value={title}
          helperText="Inserir o título do livro"
          onChange={onTitleChange}
        />
        <SearchFilter
          placeholder="Autor"
          value={author}
          onChange={onAuthorChange}
          helperText="Inserir o autor do livro"
        />
      </InputsContainer>

      <BooksTable books={books} />
    </Container>
  );
}
