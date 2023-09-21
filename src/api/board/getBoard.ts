import { supabaseClient as supabase } from '../../api/supabaseClient';
import { Board } from '../../types/db';

export const getBoard = async (id: number) => {
  const { data, error } = await supabase.from('Boards').select('*').eq('id', id).returns<Board[]>();
  if (error) {
    console.log('unable to get board');
    return null;
  }
  return data[0];
};
