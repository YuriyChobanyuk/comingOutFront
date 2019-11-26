import React, { useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import {
  addSubject,
  getSubject,
  putSubject
} from "../redux/actions/subject.action";
import AnimateHeight from "react-animate-height";
import SubjectForm from "../components/forms/SubjectForm";
import SubjectControlAdmin from "../components/SubjectControlAdmin";

import SubjectCard from "../components/SubjectCard";

const Subject = props => {
  const { id } = props.match.params;
  let subject = props.subject;

  const [showForm, setShowForm] = useState(false);

  const editFunc = () => {
    setShowForm(!showForm);
  };

  const submitUpdate = () => {
    const subject = props.subject;
    return values => {
      props.putSubject(subject, values);
    };
  };

  useEffect(() => {
    if (!subject) props.getSubject(id);
  });

  if (!subject) return <h1>No subject</h1>;

  return (
    <Fragment>
      <SubjectCard subject={subject}>
        <SubjectControlAdmin editFunc={editFunc} subject={subject} />
      </SubjectCard>
      <AnimateHeight duration={200} height={showForm ? "auto" : 0}>
        <Card className="mt-3">
          <Card.Body>
            <SubjectForm
              className="edit-form"
              initialValue={props.subject}
              submitCallback={submitUpdate()}
            ></SubjectForm>
          </Card.Body>
        </Card>
      </AnimateHeight>
    </Fragment>
  );
};

const mapStoreToProps = ({ subjectReducer }, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    subject: subjectReducer.subjects.find(subject => (subject && subject._id === id))
  };
};

const mapActionsToProps = dispatch => {
  return {
    addSubject: subject => dispatch(addSubject(subject)),
    putSubject: (subject, values) => dispatch(putSubject(subject, values)),
    getSubject: id => dispatch(getSubject(id))
  };
};

export default withRouter(connect(mapStoreToProps, mapActionsToProps)(Subject));
