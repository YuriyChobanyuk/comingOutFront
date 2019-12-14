import SubjectModel from "../../models/subject.model";
import NotificationModel from "../../models/notification.model";
import { UserModel } from "../../models/user.model";

// Subject actions
export const ADD_SUBJECT = "ADD_SUBJECT";
export const APPEND_SUBJECTS = "APPEND_SUBJECTS";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";

interface addSubjectAction {
  type: typeof ADD_SUBJECT;
  payload: SubjectModel;
}

interface appendSubjectsAction {
  type: typeof APPEND_SUBJECTS;
  payload: SubjectModel[];
}

interface removeSubjectAction {
  type: typeof REMOVE_SUBJECT;
  payload: SubjectModel;
}

interface updateSubjectAction {
  type: typeof UPDATE_SUBJECT;
  payload: SubjectModel;
}

export type subjectActionTypes =
  | addSubjectAction
  | appendSubjectsAction
  | removeSubjectAction
  | updateSubjectAction;

// Toast actions
export const TOAST_ADD = "TOAST_ADD";
export const TOAST_REMOVE = "TOAST_REMOVE";

interface addToastAction {
  type: typeof TOAST_ADD;
  payload: NotificationModel;
}

interface removeToastAction {
  type: typeof TOAST_REMOVE;
  payload: number;
}

export type alertActionType = addToastAction | removeToastAction;

// User actions
export const USER_ADD = "USER_ADD";
export const USER_UPDATE = "USER_UPDATE";
export const USER_REMOVE = "USER_REMOVE";

interface addUserAction {
  type: typeof USER_ADD;
  payload: UserModel;
}

interface updateUserAction {
  type: typeof USER_UPDATE;
  payload: UserModel;
}

interface removeUserAction {
  type: typeof USER_REMOVE;
}

export type userActionType =
  | addUserAction
  | removeUserAction
  | updateUserAction;
