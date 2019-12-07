import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { BootstrapModal } from "./Modal";
import { deleteSubject, putSubject } from "../redux/actions/subject.action";
import { useHistory } from "react-router-dom";
import SubjectModel from "../models/subject.model";
import ModalModel from "../models/modal.model";
import { History } from "history";

interface ControlProps {
  subject: SubjectModel;
  editFunc: () => void;
  removeSubject: (subject: SubjectModel, history: History) => void;
  deactivateSubject: (
    subject: SubjectModel,
    values: { active: boolean }
  ) => void;
}

const SubjectControlAdmin: React.FC<ControlProps> = ({
  editFunc,
  subject,
  removeSubject,
  deactivateSubject
}) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const [modalProps, setModalProps] = useState<ModalModel>({
    text: "default text",
    title: "default title",
    confirmAction: () => {},
    declineAction: () => {}
  });

  const handleDelete = (): void => {
    setModalProps({
      title: "Delete subject?",
      text: `Do you want to delete "${subject.title}" record? It will be unable to restore!`,
      confirmAction: removeSubject.bind(null, subject, history),
      declineAction: () => {}
    });
    setShow(true);
  };

  const changeActive = (isActive: boolean) => {
    setModalProps({
      title: "Remove subject from pending list?",
      text: !isActive
        ? `Do you want to deactivate "${subject.title}" record? It will not be shown in pending list anymore.`
        : `Do you want to activate "${subject.title}" record?`,
      confirmAction: deactivateSubject.bind(null, subject, {
        active: isActive
      }),
      declineAction: () => {}
    });
    setShow(true);
  };

  return (
    <Fragment>
      <Button className="d-block col-12" variant="info" onClick={editFunc}>
        Edit
      </Button>
      <Button
        className="d-block col-12 mt-3"
        variant="danger"
        onClick={handleDelete}
      >
        Delete
      </Button>
      {subject.active ? (
        <Button
          className="d-block col-12 mt-3"
          variant="warning"
          onClick={changeActive.bind(null, false)}
        >
          Deactivate
        </Button>
      ) : (
        <Button
          className="d-block col-12 mt-3"
          variant="warning"
          onClick={changeActive.bind(null, true)}
        >
          Activate
        </Button>
      )}
      <BootstrapModal show={show} setShow={setShow} modalProps={modalProps} />
    </Fragment>
  );
};

const mapActionsToProps = (dispatch) => ({
  removeSubject: (subject: SubjectModel, history: History) =>
    dispatch(deleteSubject(subject, history)),
  deactivateSubject: (subject: SubjectModel, values: { active: boolean }) =>
    dispatch(putSubject(subject, values))
});

export default connect(null, mapActionsToProps)(SubjectControlAdmin);
