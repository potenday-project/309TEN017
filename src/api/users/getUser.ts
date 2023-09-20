import supabase from '../../store/supabaseClient';
import { User } from '../../types/db';

const getUser = async (name: string) => {
  const { data, error } = await supabase.from('Users').select('*').eq('name', name).returns<User[]>();
  if (error) {
    console.log('unable to get user');
    return null;
  }
  return data[0];
};

export default getUser;
