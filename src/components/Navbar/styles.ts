import styled from 'styled-components';
import { Button } from '@mui/material';

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarItem = styled(Button)`
  margin: 0 10px;
  min-width: 60px;
`;
