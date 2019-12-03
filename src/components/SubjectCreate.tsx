import React from "react";
import SubjectForm from "./forms/SubjectForm";
import { connect } from "react-redux";
import { postSubject } from "../redux/actions/subject.action";

const SubjectCreate = ({submitSubject}) => {
  return <SubjectForm submitCallback={submitSubject}></SubjectForm>;
};

const mapActionsToProps = dispatch => ({
  submitSubject: subject => dispatch(postSubject(subject))
});

export default connect(null, mapActionsToProps)(SubjectCreate);
