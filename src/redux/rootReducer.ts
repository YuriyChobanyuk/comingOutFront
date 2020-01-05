import { userReducer } from "./reducers/user.reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import subjectReducer from "./reducers/subject.reducer";
import toastReducer from "./reducers/toast.reducer";
import modalReducer from "./reducers/modal.reducer";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  subjectReducer,
  toastReducer,
  userReducer,
  modalReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
