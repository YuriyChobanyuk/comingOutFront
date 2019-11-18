import { TOAST_ADD, TOAST_REMOVE } from "../actions/actionTypes";

const initialState = {
  alerts: []
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOAST_ADD:
      return {
        ...state,
        alerts: [...state.alerts, action.payload]
      };
    case TOAST_REMOVE:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };
    default:
      return state;
  }
};

export default toastReducer;
