import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalModel from "../models/modal.model";
import {removeModal} from '../redux/actions/modal.action';
import { useDispatch } from "react-redux";

export const BootstrapModal: FC<ModalModel> = ({
  confirmAction,
  declineAction,
  text,
  title,
  id
}) => {
  const dispatch =  useDispatch();

  const handleHide = () => {
    dispatch(removeModal(id));
  }

  const handleDecline = (): void => {
    if (declineAction) declineAction();
  };

  const handleAccept = (): void => {
    confirmAction();
    handleHide();
  };

  return (
    <Modal show={true} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDecline}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAccept}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
