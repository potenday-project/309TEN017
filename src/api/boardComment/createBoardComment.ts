import { supabaseClient as supabase } from '../../api/supabaseClient';
import { Board } from '../../types/db';

export const createBoardComment = async (board: Board, content: string) => {
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
