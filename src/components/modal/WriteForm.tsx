import { Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { boardApi } from '../../api';
import { closeModal } from '../../store/modal/modalSlice';
import { RootState, useAppDispatch } from '../../store/store';

export default function WriteForm() {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');

  const handleClick = async () => {
    const board = await boardApi.createBoard(
      user,
      parseInt(price.replace(/[^0-9]/g, ''), 10),
      title,
      content,
      '',
      false
    );
    if (board) {
      toast.success('게시글이 작성되었습니다.');
    }
    dispatch(closeModal());
  };

  return (
    <ModalContent>
      <ModalHeader>로그인</ModalHeader>
      <ModalBody>
        <Input type="text" label="제목" value={title} onChange={event => setTitle(event.target.value)} />
        <Input type="text" label="내용" value={content} onChange={event => setContent(event.target.value)} />
        <Input type="text" label="가격" value={price} onChange={event => setPrice(event.target.value)} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => dispatch(closeModal())}>취소</Button>
        <Button onClick={handleClick}>글쓰기</Button>
      </ModalFooter>
    </ModalContent>
  );
}
