import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../api';
import { closeModal } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/user/userSlice';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const notify = () => toast('로그인 성공!');
  const handleClick = async () => {
    const user = await userApi.login(name, password);
    dispatch(
      setUser({
        user,
      })
    );
    dispatch(closeModal());
    notify();
  };

  return (
    <ModalContent>
      <ModalHeader>로그인</ModalHeader>
      <ModalBody>
        <Input type="text" label="닉네임" value={name} onChange={event => setName(event.target.value)} />
        <Input type="text" label="비밀번호" value={password} onChange={event => setPassword(event.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => dispatch(closeModal())}>취소</Button>
        <Button onClick={handleClick}>로그인</Button>
      </ModalFooter>
    </ModalContent>
  );
}
