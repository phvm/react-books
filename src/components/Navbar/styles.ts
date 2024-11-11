import styled from 'styled-components';
import { Button } from '@mui/material';

export const NavbarContainer = styled.div`
  background-color: inherit;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #bebebe;
  box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  margin-bottom: 20px;
`;

export const NavbarItem = styled(Button)`
  margin: 0 10px;
  min-width: 60px;
`;
