import { TOAST_ADD, TOAST_REMOVE, alertActionType } from "./actionTypes";
import NotificationModel from "../../models/notification.model";

export const addToast = (alert: NotificationModel): alertActionType => ({
  type: TOAST_ADD,
  payload: alert
});

export const removeToast = (id: number): alertActionType => ({
  type: TOAST_REMOVE,
  payload: id
});

export const notifySuccess = (text: string): alertActionType => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: "success",
    text
  }
});

export const notifyError = (text: string): alertActionType => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: "error",
    text
  }
});

export const notifyWarning = (text: string): alertActionType => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: "warning",
    text
  }
});
