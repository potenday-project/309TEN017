import supabase from '../../store/supabaseClient';

const signIn = async (name: string, password: string) => {
  const { data, error } = await supabase
    .from('Users')
    .insert({
      name,
      password,
    })
    .select();

  if (error) {
    console.log('unable to signin');
    return error;
  }

  return data[0];
};

export default signIn;
