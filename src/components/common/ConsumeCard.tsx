import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { ReactNode, useEffect, useState } from 'react';
import { commentApi } from '../../api';
import { openModal } from '../../store/modal/modalSlice';
import { useAppDispatch } from '../../store/store';
import { Board, BoardComment } from '../../types/db';
import CommentForm from '../modal/CommentForm';

export default function ConsumeCard({ board }: { board: Board }) {
  const dispatch = useAppDispatch();
  const handleOpenModal = (content: ReactNode) => {
    dispatch(openModal({ content }));
  };

  const [comments, setComments] = useState<BoardComment[]>([]);
  useEffect(() => {
    async function getBoardComments() {
      const newComments = await commentApi.getBoardComments(board.id);
      setComments(newComments ?? []);
    }
    getBoardComments();
  }, []);

  return (
    <div
      onClick={() => {
        handleOpenModal(<CommentForm board={board} comments={comments} />);
      }}
    >
      <Card className="!w-full p-3 cursor-pointer shadow-md">
        <CardHeader>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {board.title}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">가격: {board.price}</h5>
          </div>
        </CardHeader>
        <CardBody>
          <p>{board.content}</p>
        </CardBody>
        <CardFooter>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">{comments?.length ?? 0}</p>
            <p className=" text-default-400 text-small">개의 댓글</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
