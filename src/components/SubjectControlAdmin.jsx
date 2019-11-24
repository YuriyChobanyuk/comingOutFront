import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { BootstrapModal } from "./Modal";

export const SubjectControlAdmin = ({ editFunc, subjectTitle }) => {
  const [show, setShow] = useState(false);

  const [modalProps, setModalProps] = useState({});

  const handleDelete = () => {
    setModalProps({
      title: 'Delete subject?',
      text: `Do you want to delete "${subjectTitle}" record? It will be unable to restore!`,
      confirmAction: () => {}
    })
    setShow(true);
  }

  return (
    <Fragment>
      <Button className="d-block col-12" variant="info" onClick={editFunc}>
        Edit
      </Button>
      <Button className="d-block col-12 mt-3" variant="danger" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="d-block col-12 mt-3" variant="warning">
        Deactivate
      </Button>
      <BootstrapModal show={show} setShow={setShow} modalProps={modalProps} />
    </Fragment>
  );
};
