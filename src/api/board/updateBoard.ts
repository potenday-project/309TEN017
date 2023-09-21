import { boardApi, userApi } from '..';
import { supabaseClient as supabase } from '../../api/supabaseClient';


export const updateBoard = async (id: number) => {
  // already bought
  const board = await boardApi.getBoard(id);
  if (board?.is_bought) {
    console.log('already bought..');
    return false;
  }

  const { error: boardError } = await supabase
    .from('Boards') // 여기에는 테이블 이름을 사용하세요. 예를 들면 'boards'
    .update({ is_bought: true })
    .eq('id', id);

  if (boardError) {
    console.log('unable to update board');
    return false;
  }

  const user = await userApi.getUser({ id: board?.user_id });

  if (board && user) {
    const saveMoney = user.save_money;
    const { price } = board;

    const { error: userError } = await supabase
      .from('Users') // 여기에는 테이블 이름을 사용하세요. 예를 들면 'boards'
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
