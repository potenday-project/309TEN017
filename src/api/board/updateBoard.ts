import { boardApi, userApi } from '..';
import { supabaseClient as supabase } from '../supabaseClient';

export const updateBoard = async (id: number, isBought: boolean) => {
  // already bought
  const board = await boardApi.getBoard(id);
  if (board?.is_bought) {
    console.log('already bought..');
    return false;
  }

  const { error: boardError } = await supabase
    .from('Boards')
    .update({ is_bought: isBought })
    .eq('id', id);

  if (isBought) {
    return false;
  }

  if (boardError) {
    console.log('unable to update board');
    return false;
  }

  const user = await userApi.getUser({ id: board?.user_id });

  if (board && user) {
    const saveMoney = user.save_money;
    const { price } = board;

    const { error: userError } = await supabase
      .from('Users')
      .update({ save_money: saveMoney + price })
      .eq('id', board.user_id);
    if (userError) {
      console.log('unable to update user');
      return false;
    }
    return true;
  }

  return true;
};
