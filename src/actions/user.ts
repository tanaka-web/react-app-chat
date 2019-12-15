import { IUser } from '../types/user';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (user: IUser) => {
  return {
    type: USER_LOGIN,
    user,
  };
};
