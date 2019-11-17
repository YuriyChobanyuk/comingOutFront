import { ADD_SUBJECT, APPEND_SUBJECTS, REMOVE_SUBJECT } from "./actionTypes";
import {
  getSubject as axiosGetSubject,
  getSubjects as axiosGetSubjects
} from "../../services/http.service";

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
export const getSubject = id => dispatch => {
  axiosGetSubject(id).then(subject => dispatch(addSubject(subject)));
};
export const getSubjectsList = () => dispatch => {
  axiosGetSubjects().then(res => dispatch(appendSubjects(res.subjectsList)));
};
