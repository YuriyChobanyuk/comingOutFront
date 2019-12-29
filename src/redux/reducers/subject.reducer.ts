import { UPDATE_SUBJECT_SEARCH, UPDATE_SUBJECT_ACTIVITY } from "./../actions/actionTypes";
import {
  APPEND_SUBJECTS,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes
} from "../actions/actionTypes";
import SubjectModel from "../../models/subject.model";
import { FilterActiveEvents } from "../../models/types.model";

export interface SubjectsInitialState {
  subjects: SubjectModel[];
  subjectsFilters: {
    search: string | null;
    activity: FilterActiveEvents | null;
  };
}

const initialState: SubjectsInitialState = {
  subjects: [],
  subjectsFilters: {
    search: null,
    activity: "All"
  }
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
    case UPDATE_SUBJECT_SEARCH:
      return {
        ...state,
        subjectsFilters: { ...state.subjectsFilters, search: actions.payload }
      };
      case UPDATE_SUBJECT_ACTIVITY:
      return {
        ...state,
        subjectsFilters: { ...state.subjectsFilters, activity: actions.payload }
      };
    default:
      return state;
  }
};

export default subjectReducer;
