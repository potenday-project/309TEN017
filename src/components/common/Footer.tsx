import { Button, Divider, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { openModal } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/store';

export default function Footer() {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ content: 'test' }));
  };

  return (
    <footer className="absolute bottom-0 w-full h-[90px]">
      <Divider />
      <Navbar className="w-full" isBordered isBlurred={false}>
        <NavbarContent className="w-full flex !justify-between">
          <NavbarItem>
            <Button className="text-white font-bold">털털홈</Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              className="text-white font-bold"
              onClick={() => {
                handleOpenModal();
              }}
            >
              글쓰기
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className="text-white font-bold">내 정보</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </footer>
  );
}
