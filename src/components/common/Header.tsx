import { Divider, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-[90px]">
      <Navbar className="relative">
        <NavbarBrand className="absolute top-[24px] flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="w-[30px] h-[30px] object-cover"
            alt="logo"
          />
        </NavbarBrand>
        <NavbarContent className="flex !justify-center text-[32px] font-bold">
          <Link to="/">거지 월드</Link>
        </NavbarContent>
      </Navbar>
      <Divider />
    </header>
  );
}
