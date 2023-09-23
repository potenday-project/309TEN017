import { useEffect, useState } from 'react';
import { boardApi, commentApi } from '../../api';
import { Board, BoardComment } from '../../types/db';
import boardUtils from '../../utils/boardUtils';
import ConsumeCard from '../common/ConsumeCard';

export default function ConsumeWrapper() {
  const [board, setBoard] = useState<Board | null>(null);
  const [boardId, setBoardId] = useState(1);

  const [comments, setComments] = useState<BoardComment[]>([]);

  useEffect(() => {
    const storageBoardId = boardUtils.getBoardId();
    if (storageBoardId) {
      setBoardId(Number(storageBoardId));
    }
    async function getBoardData() {
      const newBoard = await boardApi.getBoard(boardId);
      setBoard(newBoard);
      if (newBoard) {
        const newComments = await commentApi.getBoardComments(newBoard.id);
        setComments(newComments === null ? [] : newComments);
      }
    }
    getBoardData();
  }, []);

  return (
    <div className="w-full mb-[90px]">
      <div className="w-full p-3 relative">
        {board && <ConsumeCard board={board} comments={comments} />}
      </div>
    </div>
  );
}
