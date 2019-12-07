import React from "react";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import NotificationModel from '../models/notification.model';

interface Props {
  data: NotificationModel;
  removeToast: (id: number) => void;
}

export const ToastElement: React.FC<Props> = ({ data, removeToast }) => {
  const { type, text, id } = data;
  return (
    <Toast
      className={`toast__element_${type}`}
      delay={5000}
      autohide={true}
      onClose={removeToast.bind(null, id)}
      animation={true}
    >
      <Toast.Header>
        <FontAwesomeIcon icon={faExclamationCircle} />
        <strong className="mr-auto">{type.toUpperCase()}</strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
};
