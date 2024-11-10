import { Container, InputsContainer } from './styles.ts';
import BooksTable from '../../components/Table';
import { useEffect, useState } from 'react';
import { getByAuthorAndTitle, getVolumes } from '../../services/GoogleBooksService.ts';
import { APIBook } from '../../types/apiTypes.ts';
import { Book } from '../../types/commonTypes.ts';
import SearchFilter from '../../components/SearchFilter';
import { deferFunction } from '../../utils/deferFunction.ts';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  function onTitleChange(title: string): void {
    setTitle(title);
    deferFunction(() => getBookByAuthorAndTitle(author, title), 1000);
  }

  function onAuthorChange(author: string): void {
    setAuthor(author);
    deferFunction(() => getBookByAuthorAndTitle(author, title), 1000);
  }

  async function getBookByAuthorAndTitle(author: string, title: string): Promise<void> {
    const response = await getByAuthorAndTitle({ author, title, searchLimit: 40 });
    if (response !== undefined) {
      const data: Book[] = response.items.map((item, index) => {
        return {
          id: index,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Indisponivel',
          categories: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Indisponivel',
          avgRating: item.volumeInfo.averageRating ?? 'Indisponível',
        };
      });
      setBooks(data);
    }
  }

  useEffect(() => {
    async function getBooks() {
      const response = await getVolumes({ query: ' ', searchLimit: 20 });
      if (response !== undefined) {
        const data: Book[] = response.items.map((item: APIBook, index) => {
          return {
            id: index,
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
