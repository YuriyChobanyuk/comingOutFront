import { TOAST_ADD, TOAST_REMOVE } from "./actionTypes";

export const addToast = alert => ({
  type: TOAST_ADD,
  payload: alert
})

export const removeToast = id => ({
  type: TOAST_REMOVE,
  payload: id
})

export const notifySuccess = text => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: 'success',
    text
  }
});

export const notifyError = text => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: "error",
    text
  }
});

export const notifyWarning = text => ({
  type: TOAST_ADD,
  payload: {
    id: Date.now(),
    type: "warning",
    text
  }
});