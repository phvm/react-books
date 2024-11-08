import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Book } from '../../types/commonTypes.ts';
import { TableContainer } from './styles.ts';

interface BooksTableProps {
  books: Book[];
}

const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Título',
    headerAlign: 'center',
    align: 'center',
    flex: 2,
    minWidth: 150,
  },
  {
    field: 'author',
    headerName: 'Autor',
    headerAlign: 'center',
    align: 'center',
    flex: 2,
    minWidth: 150,
  },
  {
    field: 'categories',
    headerName: 'Categorias',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'avgRating',
    headerName: 'Média das Avaliações',
    headerAlign: 'center',
    align: 'center',
    flex: 2,
    minWidth: 220,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function BooksTable({ books }: BooksTableProps) {
  return (
    <TableContainer elevation={2}>
      <DataGrid
        columns={columns}
        rows={books}
        pageSizeOptions={[5, 10, 15, 20]}
        initialState={{ pagination: { paginationModel } }}
      />
    </TableContainer>
  );
}
