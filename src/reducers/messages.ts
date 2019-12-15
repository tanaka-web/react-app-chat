import {IMessage} from "../types/Message";
import {
  GET_MESSAGES_ERROR,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS
} from '../actions'

export type MessagesState = {
  messages: IMessage[],
}
const initialState: MessagesState = {
  messages: []
}

const messages = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages
      }
    case GET_MESSAGES_ERROR:
    case GET_MESSAGES_REQUEST:
    default:
      return state
  }
}

export default messages