import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { ReactNode, useEffect, useState } from 'react';
import { boardApi } from '../api';
import CheckBought from '../components/modal/CheckBought';
import { openModal } from '../store/modal/modalSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';
import { Board } from '../types/db';

export default function MyPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const [myBoards, setMyBoards] = useState<Board[]>([]);

  const handleOpenModal = (content: ReactNode) => {
    dispatch(openModal({ content }));
  };

  useEffect(() => {
    async function getMyBoards() {
      const boards = await boardApi.getMyBoard(user.id);
      setMyBoards(boards ?? []);
    }
    getMyBoards();
  }, []);

  return (
    <div className="w-full h-[calc(100svh-90px)] flex items-center">
      <Card className="!w-full p-3">
        <CardHeader>{user.name}님의 상태에요.</CardHeader>
        <Divider />
        <CardBody>
          <div>
            <div className="text-[22px] font-bold">내가 작성한 글들이에요.</div>
            {myBoards.length === 0 ? (
              <div className="p-3">작성한 글이 없어요. 거지 월드를 이용해보세요!</div>
            ) : (
              myBoards.map(myBoard => (
                <div key={myBoard.id} className="flex items-center p-3 mb-3">
                  <div className="mr-3">
                    <strong>제목:</strong> {myBoard.title}
                  </div>
                  {myBoard.is_bought !== null && (
                    <Button
                      size="sm"
                      onClick={() => {
                        handleOpenModal(<CheckBought board={myBoard} />);
                      }}
                    >
                      구매하셨나요?
                    </Button>
                  )}
                </div>
              ))
            )}
          </div>
          <Divider />
          <div>
            <div className="text-[22px] font-bold">거지방을 이용한 결과에요.</div>
            <div className="p-3">
              <div>
                <strong>절약한 금액:</strong> {user.save_money}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
