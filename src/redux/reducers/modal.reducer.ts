import {
  MODAL_ADD,
  MODAL_REMOVE,
  modalActionTypes
} from "./../types/modalTypes";
import ModalModel from "../../models/modal.model";

export interface ModalsInitialState {
  modals: ModalModel[];
}

const initialState: ModalsInitialState = {
  modals: []
};

const modalReducer = (state = initialState, action: modalActionTypes) => {
  switch (action.type) {
    case MODAL_ADD:
      return {
        ...state,
        modals: [...state.modals, action.payload]
      };
    case MODAL_REMOVE:
      return {
        ...state,
        modals: state.modals.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
};

export default modalReducer;
