import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Image } from "react-bootstrap";
import { addSubject, getSubject } from "../redux/actions/subject.action";

import { apiURL } from "../configs";

const Subject = props => {
  const { id } = props.match.params;
  let subject = props.subject;

  useEffect(() => {
    if (!subject) props.getSubject(id);
  }, []);

  if (!subject) return <h1>No subject</h1>;
  const { title, imgPath } = subject;

  return (
    <div>
      <Row>
        <div className="col-4">
          <Image src={`${apiURL}/${imgPath}`} rounded />
        </div>
      </Row>
      <h1>Aloha</h1>
      {title}
    </div>
  );
};

const mapStoreToProps = ({ subjectReducer }, ownProps) => {
  const { id } = ownProps.match.params;
  const currentSubject = subjectReducer.subjects.find(
    subject => subject._id === id
  );
  return {
    subject: currentSubject
  };
};

const mapActionsToProps = dispatch => {
  return {
    addSubject: subject => dispatch(addSubject(subject)),
    getSubject: id => dispatch(getSubject(id))
  };
};

export default withRouter(connect(mapStoreToProps, mapActionsToProps)(Subject));
