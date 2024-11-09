import { Container, InputsContainer } from './styles.ts';
import BooksTable from '../../components/Table';
import { useEffect, useState } from 'react';
import { getBooksByCategory, getByAuthorAndTitle, getVolumes } from '../../services/GoogleBooksService.ts';
import { APIBook } from '../../types/apiTypes.ts';
import { Book, CategoryRatings } from '../../types/commonTypes.ts';
import SearchFilter from '../../components/SearchFilter';
import CategoriesChart from '../../components/CategoriesChart';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [categoryRatings, setCategoryRatings] = useState<CategoryRatings[]>([]);
  const exampleCategories = ['fiction', 'romance', 'medical', 'engineering', 'cooking'];

  function onTitleChange(title: string): void {
    setTitle(title);
    getBookByAuthorAndTitle(author, title);
  }

  function onAuthorChange(author: string): void {
    setAuthor(author);
    getBookByAuthorAndTitle(author, title);
  }

  async function getBookByAuthorAndTitle(author: string, title: string): Promise<void> {
    const response = await getByAuthorAndTitle({ author, title, searchLimit: 40 });
    if (response) {
      const data: Book[] = response.items.map((item) => {
        return {
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Indisponivel',
          categories: item.volumeInfo?.categories?.join() ?? 'Indisponivel',
          avgRating: item.volumeInfo.averageRating ?? 'Indisponível',
        };
      });
      setBooks(data);
    }
  }

  useEffect(() => {
    async function getRatingsByCategories(categories: string[]) {
      for (const category of categories) {
        const rates: number[] = [0, 0, 0, 0, 0, 0];
        const response = await getBooksByCategory({ category: category });
        if (response !== undefined) {
          response.items
            .filter((item) => !!item.volumeInfo.averageRating)
            .forEach((ratedItem) => {
              rates[Math.round(ratedItem.volumeInfo.averageRating)] += 1;
            });
          setCategoryRatings((prevState) =>
            prevState.some((item) => item.category === category)
              ? [...prevState]
              : [
                  ...prevState,
                  {
                    category: category,
                    ratings: rates,
                  },
                ],
          );
        }
      }
    }

    getRatingsByCategories(exampleCategories);
  }, []);

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
      <CategoriesChart ratingsData={categoryRatings} />
    </Container>
  );
}
