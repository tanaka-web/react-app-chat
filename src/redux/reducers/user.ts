import { IUser } from '../../types/user';
import { USER_LOGIN, TUserActions } from '../actions/user';

export type TUserState = IUser;

const initialState: TUserState = {
  userName: '',
  loggedIn: false,
};

const user = (state = initialState, action: TUserActions): TUserState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userName: action.user.userName,
        loggedIn: action.user.loggedIn,
      };
    default:
      return state;
  }
};

export default user;
