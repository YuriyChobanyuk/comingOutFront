import ModalModel from "../../models/modal.model";

export const MODAL_ADD = "MODAL_ADD";
export const MODAL_REMOVE = "MODAL_REMOVE";

export interface  addModal {
  type: typeof MODAL_ADD,
  payload: ModalModel
}

export interface  removeModal {
  type: typeof MODAL_REMOVE,
  payload: number
}

export type modalActionTypes = addModal | removeModal;