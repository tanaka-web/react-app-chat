import { firebaseDb } from '../firebase';
import { Dispatch } from 'redux';
import { IMessage } from '../types/message';

// message action
const messagesRef = firebaseDb.ref('messages');

export const SET_MESSAGES = 'SET_MESSAGES';
const setMessages = (messages: IMessage[]) => ({
  type: SET_MESSAGES,
  messages,
});

export const getMessages = () => {
  return (dispatch: Dispatch) => {
    messagesRef.on('value', (snapshot: any) => {
      return dispatch(setMessages(Object.values(snapshot.val())));
    });
  };
};

export const pushMessage = (message: IMessage) => {
  messagesRef.push(message);
};
