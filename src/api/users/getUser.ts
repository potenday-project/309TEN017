import { User } from '../../types/db';
import supabase from '../supabaseClient';

const getUser = async ({ name, id }: { name?: string; id?: number }) => {
  if (name) {
    const { data, error } = await supabase.from('Users').select('*').eq('name', name).returns<User[]>();
    if (error) {
      console.log('unable to get user');
      return null;
    }
    return data[0];
  }
  if (id) {
    const { data, error } = await supabase.from('Users').select('*').eq('id', id).returns<User[]>();
    if (error) {
      console.log('unable to get user');
      return null;
    }
    return data[0];
  }

  return null;
};

export default getUser;
