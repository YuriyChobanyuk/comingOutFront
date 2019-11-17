import { APPEND_SUBJECTS, ADD_SUBJECT, REMOVE_SUBJECT } from "../actions/actionTypes";

const initialState = {
  subjects: []
};

const subjectReducer = (state = initialState, actions) => {
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
          subject => subject._id !== actions.payload._id
        )
      };
    default:
      return state;
  }
};

export default subjectReducer;