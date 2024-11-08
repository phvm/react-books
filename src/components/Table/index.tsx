import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function BooksTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>Título</TableCell>
            <TableCell align={'center'}>Autor</TableCell>
            <TableCell align={'center'}>Gênero</TableCell>
            <TableCell align={'center'}>Média das Avaliações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
