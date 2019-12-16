import { combineReducers } from 'redux';
import message, { TMessageState } from './message';
import user, { TUserState } from './user';

const rootReducer = combineReducers({
  message,
  user,
});

export type TReduxState = {
  message?: TMessageState;
  user?: TUserState;
};

export default rootReducer;
