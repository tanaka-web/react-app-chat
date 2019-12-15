import {firebaseDb} from "../firebase";
import {IMessage} from '../types/Message'
import {Dispatch} from "redux";

const messagesRef = firebaseDb.ref('messages');

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const getMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST
})

export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
const getMessagesSuccess = (messages: IMessage[]) => ({
  type: GET_MESSAGES_SUCCESS,
  messages
})

export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR'
const getMessagesError = (error: any) => ({
  type: GET_MESSAGES_ERROR,
  error
})

export const getMessages = () => {
  return (dispatch: Dispatch) => {
    dispatch(getMessagesRequest())
    messagesRef.on('value', async (snapshot: any) => {
      return await dispatch(getMessagesSuccess(Object.values(snapshot.val())))
    }, async (error: any) => {
      return await dispatch(getMessagesError(error))
    });
  }
}

export const pushMessage = (message: IMessage) => {
  messagesRef.push(message)
}