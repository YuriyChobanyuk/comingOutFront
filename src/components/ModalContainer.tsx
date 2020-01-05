import React from "react";
import { BootstrapModal } from "./Modal";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

export const ModalContainer = () => {
  const modals = useSelector((state: RootState) => state.modalReducer.modals);

  if (!modals.length) return false;

  return (
    <div className="modal-keeper">
      {modals.map(modal => (
        <BootstrapModal {...modal} />
      ))}
    </div>
  );
};
