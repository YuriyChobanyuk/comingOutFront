import {combineReducers} from 'redux'; 
import subjectReducer from "./reducers/subject.reducer";
import toastReducer from "./reducers/toast.reducer";

export default combineReducers({
  subjectReducer,
  toastReducer
});
