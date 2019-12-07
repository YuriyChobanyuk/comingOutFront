import SubjectModel from "../../models/subject.model";
import NotificationModel from "../../models/notification.model";

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
