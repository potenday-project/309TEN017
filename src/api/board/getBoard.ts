import supabase from '../../store/supabaseClient';
import { Board } from '../../types/db';

const getBoard = async (id: number) => {
  const { data, error } = await supabase.from('Boards').select('*').eq('id', id).returns<Board[]>();
  if (error) {
    console.log('unable to get board');
    return null;
  }
  return data[0];
};

export default getBoard;
