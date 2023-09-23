import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { boardApi } from '../../api';
import { Board } from '../../types/db';
import boardUtils from '../../utils/boardUtils';
import ConsumeCard from '../common/ConsumeCard';

export default function ConsumeWrapper() {
  const [boards, setBoards] = useState<Board[]>([]);
  // const [board, setBoard] = useState<Board | null>(null);
  const [boardId, setBoardId] = useState(1);

  useEffect(() => {
    const storageBoardId = boardUtils.getBoardId();
    if (storageBoardId) {
      setBoardId(Number(storageBoardId));
    }

    async function fetchInitialBoards() {
      const limitBoards = await boardApi.getBoards(boardId, 3);
      if (limitBoards) {
        setBoards(limitBoards);
      }
    }
    fetchInitialBoards();
  }, []);

  const handleSlideChange = async () => {
    const newBoard = await boardApi.getBoard(boards[boards.length - 1].id + 1);
    console.log(boards);
    if (!newBoard) {
      setBoards(prevBoards => [
        ...prevBoards,
        {
          id: 0,
          user_id: 0,
          created_at: new Date(),
          price: 0,
          title: '모든 콘텐츠를 소비했습니다.',
          content: '게시글을 직접 올려주세요!',
          image_url: '',
          is_bought: false,
        },
      ]);
    }
    if (newBoard) {
      setBoards(prevBoards => [...prevBoards, newBoard]);
    }
  };
  return (
    <div className="w-full mb-[90px]">
      <Swiper onSlideChange={handleSlideChange}>
        {boards.map((board, index) => (
          <SwiperSlide key={`${board.id}-${index}`}>
            <div className="w-full p-3 relative">
              <ConsumeCard board={board} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
