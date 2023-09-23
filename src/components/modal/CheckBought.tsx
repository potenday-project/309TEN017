import { Button, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { boardApi } from '../../api';
import { closeModal } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/store';
import { Board } from '../../types/db';

export default function CheckBought({ board }: { board: Board }) {
  const dispatch = useAppDispatch();
  const notify = () => toast('처리되었습니다.');
  const navigate = useNavigate();
  return (
    <ModalContent>
      <ModalHeader>구매하셨나요?</ModalHeader>
      <ModalFooter>
        <Button
          color="danger"
          variant="light"
          onClick={() => {
            boardApi.updateBoard(board.id, false).then(() => {
              dispatch(closeModal());
              notify();
              navigate('/');
            });
          }}
        >
          아니요
        </Button>
        <Button
          color="primary"
          onClick={() => {
            boardApi.updateBoard(board.id, false).then(() => {
              dispatch(closeModal());
              notify();
              navigate('/');
            });
          }}
        >
          네
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
