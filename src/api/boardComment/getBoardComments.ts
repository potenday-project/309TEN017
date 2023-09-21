import { supabaseClient as supabase } from '../../api/supabaseClient';
import { BoardComment } from '../../types/db';

export const getBoardComments = async (id: number) => {
  const { data, error } = await supabase.from('BoardComments').select('*').eq('board_id', id).returns<BoardComment[]>();
  if (error) {
    console.log('unable to get board');
    return null;
  }
  return data;
};
