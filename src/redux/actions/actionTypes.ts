import { Direction } from './../../models/types.model';
import { PaginationSort } from './../../models/pagination.model';
import SubjectModel, { SubjectQueryParams } from "../../models/subject.model";
import NotificationModel from "../../models/notification.model";
import { UserModel } from "../../models/user.model";
import { FilterActiveEvents } from "../../models/types.model";
import { PaginateResult } from "../../models/pagination.model";

// Subject actions
export const ADD_SUBJECT = "ADD_SUBJECT";
export const APPEND_SUBJECTS = "APPEND_SUBJECTS";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";
export const UPDATE_SUBJECT_SEARCH = "UPDATE_SUBJECT_SEARCH";
export const UPDATE_SUBJECT_ACTIVITY = "UPDATE_SUBJECT_ACTIVITY";
export const APPEND_SUBJECT_PAGINATION = 'APPEND_SUBJECT_PAGINATION';
export const UPDATE_SUBJECT_PAGINATION = 'UPDATE_SUBJECT_PAGINATION';
export const UPDATE_SUBJECT_PAGINATION_QUERY = 'UPDATE_SUBJECT_PAGINATION_QUERY';
export const UPDATE_SUBJECT_PAGINATION_SORT = 'UPDATE_SUBJECT_PAGINATION_SORT';


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
interface updateSubjectSearch {
  type: typeof UPDATE_SUBJECT_SEARCH;
  payload: string | null;
}

interface updateSubjectActivity {
  type: typeof UPDATE_SUBJECT_ACTIVITY;
  payload: FilterActiveEvents | null;
}

interface updateSubjectsPagination {
  type: typeof UPDATE_SUBJECT_PAGINATION;
  payload: PaginateResult<SubjectModel>
}

interface appendSubjectsPagination {
  type: typeof APPEND_SUBJECT_PAGINATION;
  payload: PaginateResult<SubjectModel>
}

interface updateSubjectsPaginationQuery {
  type: typeof UPDATE_SUBJECT_PAGINATION_QUERY,
  payload: Pick<SubjectQueryParams, 'limit' | 'page'>
}
interface updateSubjectsPaginationSort {
  type: typeof UPDATE_SUBJECT_PAGINATION_SORT,
  payload: PaginationSort<{[key: string]: Direction}> | null
}

export type subjectActionTypes =
  | addSubjectAction
  | appendSubjectsAction
  | removeSubjectAction
  | updateSubjectAction
  | updateSubjectSearch
  | updateSubjectActivity
  | updateSubjectsPagination
  | appendSubjectsPagination
  | updateSubjectsPaginationQuery
  | updateSubjectsPaginationSort;

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
