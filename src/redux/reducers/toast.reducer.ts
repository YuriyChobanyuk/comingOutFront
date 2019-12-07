import NotificationModel from "../../models/notification.model";
import {
  TOAST_ADD,
  TOAST_REMOVE,
  alertActionType
} from "../actions/actionTypes";

export interface AlertInitialState {
  alerts: NotificationModel[];
}

const initialState: AlertInitialState = {
  alerts: []
};

const toastReducer = (state = initialState, action: alertActionType) => {
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
