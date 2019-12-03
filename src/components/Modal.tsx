import React from "react";
import { Button, Modal } from "react-bootstrap";
import ModalModel from '../models/modal.model';

interface ModalProps {
  show: boolean;
  setShow: (val: boolean) => void;
  modalProps: ModalModel
}

export const BootstrapModal = ({ show, setShow, modalProps }: ModalProps) => {
  const { title, text, confirmAction, declineAction } = modalProps;
  const handleClose = () => setShow(false);

  const handleDecline = (): void => {
    if (declineAction) declineAction();
    handleClose();
  };

  const handleAccept = (): void => {
    confirmAction();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
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
