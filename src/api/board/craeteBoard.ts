import supabase from '../../store/supabaseClient';
import { User } from '../../types/db';

const createBoard = async (
  user: User,
  price: number,
  title: string,
  content: string,
  image_url: string,
  is_bought: boolean
) => {
  const { data, error } = await supabase.from('Boards').insert({
    user_id: user.id,
    price,
    title,
    content,
    image_url,
    is_bought,
  });
  if (error) {
    console.log('unable to create board');
    return null;
  }
  return !!data;
};

export default createBoard;
