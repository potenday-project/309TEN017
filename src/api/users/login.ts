import { userApi } from '..';

export const login = async (name: string, password: string) => {
  const isExist = await userApi.existName(name);
  if (isExist) {
    const user = await userApi.getUser({ name });
    if (user?.password === password) {
      console.log('login success');
      return user;
    }
    console.log('login failed');
    return null;
  }

  const user = await userApi.signIn(name, password);
  console.log('singin');
  return user;
};
