import { IMessage } from '../types/message';
import { SET_MESSAGES } from '../actions/message';

export type MessageState = {
  messages: IMessage[];
};
const initialState: MessageState = {
  messages: [],
};

const message = (state = initialState, action: any) => {
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
