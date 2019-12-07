import { SubjectFormModel } from "./../../models/subject.model";
import {
  ADD_SUBJECT,
  APPEND_SUBJECTS,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes
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

export const getSubjectsList = (): AppThunk => dispatch => {
  axiosGetSubjects()
    .then(resObject => dispatch(appendSubjects(resObject.subjectsList)))
    .catch(e => {
      dispatch(notifyError(e.message));
    });
};

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
