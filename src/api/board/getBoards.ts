import { Board } from '../../types/db';
import { supabaseClient as supabase } from '../supabaseClient';

export const getBoards = async (id: number, limit?: number) => {
  let query = supabase.from('Boards').select('*').gte('id', id);

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const { data, error } = await query.returns<Board[]>();

  if (error) {
    console.log('unable to get board');
    return null;
  }
  return data;
};
