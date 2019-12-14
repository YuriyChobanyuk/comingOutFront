import {
  userActionType,
  USER_ADD,
  USER_REMOVE,
  USER_UPDATE
} from "./../actions/actionTypes";
import { UserModel } from "./../../models/user.model";

interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: null
}

export const userReducer = (state = initialState, action: userActionType) => {
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        user: action.payload
      };
    case USER_REMOVE:
      return {
        ...state,
        user: null
      };
    case USER_UPDATE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
