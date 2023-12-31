import { supabaseClient as supabase } from '../supabaseClient';

/**
 * Check for duplicate name.
 * @param {string} name
 * @returns
 */
export const existName = async (name: string) => {
  const { data, error } = await supabase.from('Users').select('name').eq('name', name);
  console.log(data);
  if (error) {
    return false;
  }
  return data && data.length > 0;
};
