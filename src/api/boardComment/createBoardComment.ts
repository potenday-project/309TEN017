import { Board } from '../../types/db';
import supabase from '../supabaseClient';

const createBoardComment = async (board: Board, content: string) => {
  const { error } = await supabase.from('BoardComments').insert({
    board_id: board.id,
    content,
  });

  if (error) {
    console.log('unable to create boardComment');
    return false;
  }
  return true;
};

export default createBoardComment;
