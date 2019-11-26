import {
  ADD_SUBJECT,
  APPEND_SUBJECTS,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT
} from "./actionTypes";
import {
  getSubject as axiosGetSubject,
  getSubjects as axiosGetSubjects,
  postSubject as axiosPostSubject,
  updateSubject as axiosUpdateSubject,
  deleteSubject as axiosDeleteSubject
} from "../../services/http.service";
import { notifyError, notifySuccess } from "./toast.actions";

export const addSubject = subject => ({
  type: ADD_SUBJECT,
  payload: subject
});
export const appendSubjects = subjects => ({
  type: APPEND_SUBJECTS,
  payload: subjects
});
export const removeSubject = subject => ({
  type: REMOVE_SUBJECT,
  payload: subject
});

export const updateSubject = subject => ({
  type: UPDATE_SUBJECT,
  payload: subject
});

export const getSubject = id => dispatch => {
  axiosGetSubject(id)
    .then(subject => {
      if (subject) {
        dispatch(addSubject(subject))
      } else {
        dispatch(notifyError('There is no such subject'))
      }

    })
    .catch(e => dispatch(notifyError(e.message)));
};

export const getSubjectsList = () => dispatch => {
  axiosGetSubjects()
    .then(res => dispatch(appendSubjects(res.subjectsList)))
    .catch(e => {
      dispatch(notifyError(e.message));
    });
};

export const postSubject = subject => dispatch => {
  axiosPostSubject(subject)
    .then(savedSubject => dispatch(addSubject(savedSubject)))
    .then(() => dispatch(notifySuccess("Subject was successfully added")))
    .catch(e => dispatch(notifyError(e.message)));
};

export const putSubject = (subject, values) => dispatch => {
  axiosUpdateSubject({ ...subject, ...values })
    .then(updatedSubject => dispatch(updateSubject(updatedSubject)))
    .then(() => dispatch(notifySuccess("Subject was updated")))
    .catch(e => dispatch(notifyError(e.message)));
};

export const deleteSubject = (subject, history) => dispatch => {
  axiosDeleteSubject(subject)
    .then(deletedSubject => dispatch(removeSubject(deletedSubject)))
    .then(() => history.push('/admin/subjects'))
    .then(() => dispatch(notifySuccess("Subject was deleted")))
    .catch(e => dispatch(notifyError(e.message)));
};
