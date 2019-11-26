import {
  APPEND_SUBJECTS,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT
} from "../actions/actionTypes";

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
          subject => (subject && subject._id !== actions.payload._id)
        )
      };
    case UPDATE_SUBJECT:
      console.log(actions.payload)
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
