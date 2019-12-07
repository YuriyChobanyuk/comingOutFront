import { combineReducers } from "redux";
import subjectReducer from "./reducers/subject.reducer";
import toastReducer from "./reducers/toast.reducer";

const rootReducer = combineReducers({
  subjectReducer,
  toastReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;