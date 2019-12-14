import { removeUser } from "./../redux/actions/user.action";
import { store } from "./../redux/rootReducer";
import { SignUpModel, LoginModel } from "./../models/auth.model";
import { userRole, UserModel } from "../models/user.model";
import { addUser, updateUser } from "../redux/actions/user.action";
import { notifyError } from "../redux/actions/toast.actions";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { history } from "../helpers/history";

export function checkTokenExp(): void {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwtDecode(token) as UserModel;
    if (Date.now() / 1000 - user.exp > 60 * 60) {
      clearUserAndToken();
      return;
    }
  }
}

export function parseToken(): UserModel | null {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwtDecode(token) as UserModel;
    store.dispatch(addUser(user));
    return user;
  }
  return null;
}

export function isAuthenticated(role: userRole | userRole[]): boolean {
  let user = store.getState().userReducer.user || parseToken();

  if (!user) {
    return false;
  }

  if (Date.now() / 1000 - user.exp > 60 * 60) {
    logout();
    return false;
  }

  if (Array.isArray(role) && role.includes(user.role)) return true;
  return user.role === role;
}

export async function signUp(signUpData: SignUpModel): Promise<UserModel> {
  try {
    const res = await axios.post(`/auth/register`, signUpData);
    const token = res.headers.authorization;
    localStorage.setItem("token", token);
    return jwtDecode(token) as UserModel;
  } catch (e) {
    throw new Error("Sign in error: " + e.message);
  }
}

export async function login({
  email,
  password
}: LoginModel): Promise<UserModel> {
  try {
    const res = await axios.post(`/auth/login`, {
      email,
      password
    });

    const token = res.headers.authorization;
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token) as UserModel;
    return decoded;
  } catch (e) {
    throw e;
  }
}

export function clearUserAndToken() {
  localStorage.removeItem("token");
  store.dispatch(removeUser());
}

export function logout(): void {
  clearUserAndToken();
  history.replace("/login");
}

export async function refreshToken(): Promise<string | undefined> {
  try {
    const response = await axios.get("/auth/refresh");
    const token = response.headers.authorization as string;

    if (!token) {
      throw new Error("Token refresh error");
    } else {
      localStorage.setItem("token", token);
      const user = jwtDecode<UserModel>(token);
      store.dispatch(updateUser(user));
      return token;
    }
  } catch (e) {
    store.dispatch(notifyError(e.message));
    console.error(e);
  }
}
