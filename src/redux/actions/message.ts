import { Dispatch } from 'redux';
import { firebaseDb } from '../../firebase';
import { IMessage } from '../../types/message';

// message action
const messagesRef = firebaseDb.ref('messages');

export const SET_MESSAGES = 'SET_MESSAGES';
const setMessages = (messages: IMessage[]): { type: string; messages: IMessage[] } => ({
  type: SET_MESSAGES,
  messages,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getMessages = (): any => {
  return (dispatch: Dispatch): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messagesRef.on('value', (snapshot: any): void => {
      dispatch(setMessages(Object.values(snapshot.val())));
    });
  };
};

export const pushMessage = (message: IMessage): void => {
  messagesRef.push(message);
};

export type TMessageActions =
  | ReturnType<typeof setMessages>
  | ReturnType<typeof getMessages>
  | ReturnType<typeof pushMessage>;
