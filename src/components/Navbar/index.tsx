import { NavbarContainer, NavbarItem, NavigationsContainer, ThemeModeContainer } from './styles.ts';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useColorScheme } from '@mui/material';

interface NavbarProps {
  pages: { link: string; title: string }[];
}

export default function Navbar({ pages }: NavbarProps) {
  const { mode, setMode } = useColorScheme();
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  console.log('mode 2', mode);
  return (
    <NavbarContainer style={{ backgroundColor: mode === 'light' ? '#ffffff' : '#181818' }}>
      <NavigationsContainer>
        {pages.map((page) => (
          <NavbarItem key={page.title} size="medium" href={`${page.link}`} variant="text">
            {page.title}
          </NavbarItem>
        ))}
      </NavigationsContainer>

      <ThemeModeContainer size="small" onClick={() => toggleColorMode()}>
        {mode === 'light' ? <LightModeIcon /> : <NightlightIcon />}
      </ThemeModeContainer>
    </NavbarContainer>
  );
}
