import { Divider, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-[90px]">
      <Navbar className="relative">
        <NavbarBrand className="absolute top-[24px]">
          <h1 className="bg-red-200">LOGO</h1>
        </NavbarBrand>
        <NavbarContent className="flex !justify-center text-[32px] font-bold">
          <Link to="/">거지 월드</Link>
        </NavbarContent>
      </Navbar>
      <Divider />
    </header>
  );
}
