import { SignUpModel } from './../../models/auth.model';
import { notifyError } from "./toast.actions";
import { AppThunk } from "./../state.model";
import {
  userActionType,
  USER_ADD,
  USER_REMOVE,
  USER_UPDATE
} from "./actionTypes";
import { UserModel } from "./../../models/user.model";
import { login, signUp } from "../../services/auth.service";
import { LoginModel } from "../../models/auth.model";
import { history } from "../../helpers/history";

export const addUser = (user: UserModel): userActionType => ({
  type: USER_ADD,
  payload: user
});

export const updateUser = (user: UserModel): userActionType => ({
  type: USER_UPDATE,
  payload: user
});

export const removeUser = (): userActionType => ({
  type: USER_REMOVE
});

export const thunkLogin = (data: LoginModel): AppThunk => dispatch => {
  login(data)
    .then(user => {
      dispatch(addUser(user));
      return user.role;
    })
    .then(role => {
      history.replace(`/${role.toLowerCase()}`)
    })
    .catch(e => {
      console.error(e);
      dispatch(notifyError("Login error: " + e.message));
    });
};


export const thunkSignUp = (data: SignUpModel): AppThunk => dispatch => {
  signUp(data)
    .then(user => {
      dispatch(addUser(user));
      return user.role;
    })
    .then(role => history.replace(`/${role.toLowerCase()}`))
    .catch(e => {
      console.error(e);
      dispatch(notifyError("Login error: " + e.message));
    });
};
