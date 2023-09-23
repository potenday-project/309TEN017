import {
  Button,
  Code,
  Divider,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { commentApi } from '../../api';
import { Board, BoardComment } from '../../types/db';

export default function CommentForm({
  board,
  comments,
}: {
  board: Board;
  comments: BoardComment[];
}) {
  const [content, setContent] = useState('');
  const notify = () => toast('댓글 작성 완료!');
  return (
    <ModalContent>
      <ModalHeader>이 구매자를 혼내주세요.</ModalHeader>
      <ModalBody>
        {comments.length === 0 ? (
          <div>댓글이 없어요. 첫 번째 댓글을 작성해주세요!</div>
        ) : (
          comments.map((comment, index) => (
            <Code key={comment.id + 1}>
              <div className="p-1 font-bold">익명{index}</div>
              <Divider />
              <div className="p-1 text-sm text-slate-500">{comment.content}</div>
            </Code>
          ))
        )}
      </ModalBody>
      <ModalFooter>
        <Input
          placeholder="댓글을 작성해주세요."
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <Button
          onClick={() => {
            commentApi.createBoardComment(board, content).then(() => {
              notify();
              setContent('');
            });
          }}
        >
          작성하기
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
