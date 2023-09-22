import { Link } from 'react-router-dom';
import { Navbar, NavbarContent, NavbarItem, Button, Divider } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[90px]">
      <Divider />

      <Navbar isBlurred={false} className="h-full">
        <NavbarContent className="!justify-between">
          <NavbarItem>
            <Button color="primary" size="lg">
              <Link to="/">
                <span className="font-bold">털털홈</span>
              </Link>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button color="primary" size="lg">
              <span className="font-bold">글쓰기</span>
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button color="primary" size="lg">
              <span className="font-bold">내정보</span>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </footer>
  );
}
