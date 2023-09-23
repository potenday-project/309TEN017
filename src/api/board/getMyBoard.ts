import { Board } from '../../types/db';
import { supabaseClient as supabase } from '../supabaseClient';

export const getMyBoard = async (user_id: number) => {
  const { data, error } = await supabase
    .from('Boards')
    .select('*')
    .eq('user_id', user_id)
    .returns<Board[]>();
  if (error) {
    console.log('unable to get board');
    return null;
  }
  return data;
};
