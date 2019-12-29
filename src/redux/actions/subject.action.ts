import { debounce } from "lodash";
import { SubjectFormModel } from "./../../models/subject.model";
import {
  ADD_SUBJECT,
  APPEND_SUBJECTS,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes,
  UPDATE_SUBJECT_SEARCH,
  UPDATE_SUBJECT_ACTIVITY
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
import { History } from "history";
import { FilterActiveEvents } from "../../models/types.model";
import { Dispatch } from "redux";

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
  search: string | null,
  activity: FilterActiveEvents | null
): AppThunk => dispatch => {
  axiosGetSubjects(search, activity)
    .then(resObject => dispatch(appendSubjects(resObject.subjectsList)))
    .catch(e => {
      dispatch(notifyError(e.message));
    });
};

const innerFunction = debounce((dispatch: Dispatch, search: string | null,
  activity: FilterActiveEvents | null) => {
  axiosGetSubjects(search, activity)
        .then(resObject => dispatch(appendSubjects(resObject.subjectsList)))
        .catch(e => {
          dispatch(notifyError(e.message));
        });
}, 300, { leading: true, trailing: true });


export const getSubjectsListWithDebounce = (
  search: string | null,
  activity: FilterActiveEvents | null
): AppThunk => dispatch => innerFunction(dispatch, search, activity)
  

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
  subject: SubjectModel,
  history: History
): AppThunk => dispatch => {
  axiosDeleteSubject(subject)
    .then(deletedSubject => dispatch(removeSubject(deletedSubject)))
    .then(() => history.push("/admin/subjects"))
    .then(() => dispatch(notifySuccess("Subject was deleted")))
    .catch(e => dispatch(notifyError(e.message)));
};
