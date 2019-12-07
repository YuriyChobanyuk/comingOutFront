import {
  APPEND_SUBJECTS,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes
} from "../actions/actionTypes";
import SubjectModel from "../../models/subject.model";

export interface SubjectsInitialState {
  subjects: SubjectModel[];
}

const initialState: SubjectsInitialState = {
  subjects: []
};

const subjectReducer = (state = initialState, actions: subjectActionTypes) => {
  switch (actions.type) {
    case APPEND_SUBJECTS:
      return {
        ...state,
        subjects: [...actions.payload]
      };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: [...state.subjects, actions.payload]
      };
    case REMOVE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.filter(
          subject => subject && subject._id !== actions.payload._id
        )
      };
    case UPDATE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.map(subject => {
          if (actions.payload._id === subject._id) {
            return actions.payload;
          } else return subject;
        })
      };
    default:
      return state;
  }
};

export default subjectReducer;
