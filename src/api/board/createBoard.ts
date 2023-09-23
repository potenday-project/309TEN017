import { User } from '../../types/db';
import { supabaseClient as supabase } from '../supabaseClient';

export const createBoard = async (
  user: User,
  price: number,
  title: string,
  content: string,
  image_url: string
) => {
  const { error } = await supabase.from('Boards').insert({
    user_id: user.id,
    price,
    title,
    content,
    image_url,
  });
  if (error) {
    console.log('unable to create board');
    return false;
  }
  return true;
};
