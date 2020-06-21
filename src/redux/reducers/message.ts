import { IMessage } from '../../types/message';
import { SET_MESSAGES, TMessageActions } from '../actions/message';

export type TMessageState = {
  messages: IMessage[];
};
const initialState: TMessageState = {
  messages: [],
};

const message = (state = initialState, action: TMessageActions): TMessageState => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default message;
