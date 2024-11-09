import { NavbarContainer, NavbarItem } from './styles.ts';

interface NavbarProps {
  pages: { link: string; title: string }[];
}

export default function Navbar({ pages }: NavbarProps) {
  return (
    <NavbarContainer>
      {pages.map((page) => (
        <NavbarItem size="medium" href={`#${page.link}`} variant="text">
          {page.title}
        </NavbarItem>
      ))}
    </NavbarContainer>
  );
}
