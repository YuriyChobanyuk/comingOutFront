import { PaginationSort } from "./../../models/pagination.model";
import { debounce } from "lodash";
import {
  SubjectFormModel,
  SubjectQueryParams
} from "./../../models/subject.model";
import {
  ADD_SUBJECT,
  APPEND_SUBJECTS,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes,
  UPDATE_SUBJECT_SEARCH,
  UPDATE_SUBJECT_ACTIVITY,
  UPDATE_SUBJECT_PAGINATION,
  APPEND_SUBJECT_PAGINATION,
  UPDATE_SUBJECT_PAGINATION_QUERY,
  UPDATE_SUBJECT_PAGINATION_SORT
} from "./actionTypes";
import {
  getSubject as axiosGetSubject,
  getSubjects as axiosGetSubjects,
  postSubject as axiosPostSubject,
  updateSubject as axiosUpdateSubject,
  deleteSubject as axiosDeleteSubject
} from "../../services/http.service";
import { notifyError, notifySuccess } from "./toast.actions";
import SubjectModel from "../../models/subject.model";
import { AppThunk } from "../state.model";
import {history} from '../../helpers/history';
import { FilterActiveEvents } from "../../models/types.model";
import { Dispatch } from "redux";
import { PaginateResult } from "../../models/pagination.model";

export const addSubject = (subject: SubjectModel): subjectActionTypes => ({
  type: ADD_SUBJECT,
  payload: subject
});
export const appendSubjects = (
  subjects: SubjectModel[]
): subjectActionTypes => ({
  type: APPEND_SUBJECTS,
  payload: subjects
});
export const removeSubject = (subject: SubjectModel): subjectActionTypes => ({
  type: REMOVE_SUBJECT,
  payload: subject
});

export const updateSubject = (subject: SubjectModel): subjectActionTypes => ({
  type: UPDATE_SUBJECT,
  payload: subject
});

export const updateSubjectSearch = (
  search: string | null
): subjectActionTypes => ({
  type: UPDATE_SUBJECT_SEARCH,
  payload: search
});

export const updateSubjectActivity = (
  activity: FilterActiveEvents | null
): subjectActionTypes => ({
  type: UPDATE_SUBJECT_ACTIVITY,
  payload: activity
});

export const updateSubjectsPagination = (
  pagination: PaginateResult<SubjectModel>
): subjectActionTypes => ({
  type: UPDATE_SUBJECT_PAGINATION,
  payload: pagination
});

export const appendSubjectsPagination = (
  pagination: PaginateResult<SubjectModel>
): subjectActionTypes => ({
  type: APPEND_SUBJECT_PAGINATION,
  payload: pagination
});

export const updateSubjPugQuery = (
  query: Pick<SubjectQueryParams, "limit" | "page">
): subjectActionTypes => ({
  type: UPDATE_SUBJECT_PAGINATION_QUERY,
  payload: query
});

export const updateSubjPugSort = (
  sort: PaginationSort | null
): subjectActionTypes => ({
  type: UPDATE_SUBJECT_PAGINATION_SORT,
  payload: sort
});

export const getSubject = (id: string): AppThunk => dispatch => {
  axiosGetSubject(id)
    .then(subject => {
      if (subject) {
        dispatch(addSubject(subject));
      } else {
        dispatch(notifyError("There is no such subject"));
      }
    })
    .catch((e: Error) => dispatch(notifyError(e.message)));
};

export const getSubjectsList = (
  query: SubjectQueryParams
): AppThunk => dispatch => {
  axiosGetSubjects(query)
    .then(pagination => dispatch(appendSubjects(pagination.docs)))
    .catch(e => {
      dispatch(notifyError(e.message));
    });
};

const innerFunction = debounce(
  (dispatch: Dispatch, queryParams: SubjectQueryParams) => {
    axiosGetSubjects(queryParams)
      .then(pagination => {
        dispatch(appendSubjects(pagination.docs));
        dispatch(appendSubjectsPagination(pagination));
      })
      .catch(e => {
        dispatch(notifyError(e.message));
      });
  },
  400,
  { leading: true, trailing: true }
);

export const getSubjectsListWithDebounce = (
  queryParams: SubjectQueryParams
): AppThunk => dispatch => innerFunction(dispatch, queryParams);

export const postSubject = (
  subject: SubjectFormModel
): AppThunk => dispatch => {
  axiosPostSubject(subject)
    .then(savedSubject => dispatch(addSubject(savedSubject)))
    .then(() => dispatch(notifySuccess("Subject was successfully added")))
    .catch(e => dispatch(notifyError(e.message)));
};

export const putSubject = (
  subject: SubjectModel,
  values: SubjectFormModel | { active: boolean }
): AppThunk => dispatch => {
  axiosUpdateSubject({ ...subject, ...values })
    .then((updatedSubject: SubjectModel) =>
      dispatch(updateSubject(updatedSubject))
    )
    .then(() => dispatch(notifySuccess("Subject was updated")))
    .catch(e => dispatch(notifyError(e.message)));
};

export const deleteSubject = (
  subject: SubjectModel
): AppThunk => dispatch => {
  axiosDeleteSubject(subject)
    .then(deletedSubject => dispatch(removeSubject(deletedSubject)))
    .then(() => history.push("/admin/subjects"))
    .then(() => dispatch(notifySuccess("Subject was deleted")))
    .catch(e => dispatch(notifyError(e.message)));
};
