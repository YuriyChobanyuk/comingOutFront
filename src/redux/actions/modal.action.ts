import { MODAL_ADD, MODAL_REMOVE, modalActionTypes } from './../types/modalTypes';
import ModalModel from "../../models/modal.model";

export const addModal = (modal: Omit<ModalModel, 'id' | 'show'>, id: number): modalActionTypes => ({
  type: MODAL_ADD,
  payload: {
    ...modal,
    id
  }
});

export const removeModal = (id: number): modalActionTypes => ({
  type: MODAL_REMOVE,
  payload: id
})