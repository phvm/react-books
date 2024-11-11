import styled from 'styled-components';
import { Button } from '@mui/material';

export const NavbarContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bebebe;
  box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  margin-bottom: 20px;
  padding: 10px 15%;
  z-index: 99;
`;

export const NavbarItem = styled(Button)`
  margin: 0 10px;
  min-width: 60px;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const NavigationsContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const ThemeModeContainer = styled(Button)`
  transition: all 0.3s;
`;
