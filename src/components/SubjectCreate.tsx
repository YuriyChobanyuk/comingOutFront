import React from "react";
import SubjectForm from "./forms/SubjectForm";
import { useDispatch } from "react-redux";
import { postSubject } from "../redux/actions/subject.action";
import { SubjectFormModel } from "../models/subject.model";

const SubjectCreate = () => {
  const dispatch = useDispatch();

  const submitSubject = (subject: SubjectFormModel) =>
    dispatch(postSubject(subject));

  return <SubjectForm submitCallback={submitSubject}></SubjectForm>;
};

export default SubjectCreate;
