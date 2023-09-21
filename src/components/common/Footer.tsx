import { Button, Divider, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { ReactNode } from 'react';
import { openModal } from '../../store/modal/modalSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import LoginForm from '../modal/LoginForm';
import WriteForm from '../modal/WriteForm';

export default function Footer() {
  const dispatch = useAppDispatch();
  // 편의상 name이 initialState가 아니면 로그인 처리.
  const isLogin = useAppSelector((state: RootState) => state.user.name !== '');
  // const user = useAppSelector((state: RootState) => state.user);

  const handleOpenModal = (content: ReactNode) => {
    dispatch(openModal({ content }));
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
                if (isLogin) {
                  handleOpenModal(<WriteForm />);
                } else {
                  handleOpenModal(<LoginForm />);
                }
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
