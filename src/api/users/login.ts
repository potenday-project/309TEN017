import existName from './existName';
import getUser from './getUser';
import signIn from './signIn';

const login = async (name: string, password: string) => {
  const isExist = await existName(name);
  if (isExist) {
    const user = await getUser({ name });
    if (user?.password === password) {
      console.log('login success');
      return user;
    }
    console.log('login failed');
    return null;
  }

  const user = await signIn(name, password);
  console.log('singin');
  return user;
};

export default login;
