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

  return (
    <NavbarContainer style={{ backgroundColor: mode === 'light' ? '#ffffff' : '#181818' }}>
      <NavigationsContainer
        role="navigation"
        aria-label="Main site navigation"
        aria-description="Navigation links to other pages">
        {pages.map((page) => (
          <NavbarItem
            aria-description={`Navigation link to navigate to ${page.title} page`}
            aria-label={`${page.title} navigation`}
            role="menuitem"
            type="button"
            key={page.title}
            size="medium"
            href={`${page.link}`}
            variant="text">
            {page.title}
          </NavbarItem>
        ))}
      </NavigationsContainer>

      <ThemeModeContainer
        tabIndex={0}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} theme`}
        disableTouchRipple={true}
        type="button"
        size="small"
        onClick={() => toggleColorMode()}>
        {mode === 'light' ? <LightModeIcon aria-hidden="true" /> : <NightlightIcon aria-hidden="true" />}
      </ThemeModeContainer>
    </NavbarContainer>
  );
}
