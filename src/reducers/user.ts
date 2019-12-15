import {IUser} from "../types/user";
import {USER_LOGIN} from '../actions'

const initialState: IUser = {
  userName: "",
  loggedIn: false
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userName: action.user.userName,
        loggedIn: action.user.loggedIn
      }
    default:
      return state
  }
}

export default user