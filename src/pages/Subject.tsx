import React, { useEffect, useState, Fragment } from "react";
import { withRouter, match, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import {
  getSubject as getSubjectAction,
  putSubject as putSubjectAction
} from "../redux/actions/subject.action";
import AnimateHeight from "react-animate-height";
import SubjectForm from "../components/forms/SubjectForm";
import SubjectControlAdmin from "../components/SubjectControlAdmin";

import SubjectCard from "../components/SubjectCard";
import { RootState } from "../redux/rootReducer";
import SubjectModel, { SubjectFormModel } from "../models/subject.model";

interface Props extends RouteComponentProps {
  match: match<{ id: string }>;
}

const Subject: React.FC<Props> = ({ match }) => {
  const { id } = match.params;

  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const subject = useSelector(({ subjectReducer }: RootState) =>
    subjectReducer.subjects.find(subject => subject && subject._id === id)
  );

  const putSubject = (subject: SubjectModel, values: SubjectFormModel) =>
    dispatch(putSubjectAction(subject, values));
  const getSubject = (id: string) => dispatch(getSubjectAction(id));

  const editFunc = () => {
    setShowForm(!showForm);
  };

  const submitUpdate = (subject: SubjectModel) => {
    return (values: SubjectFormModel) => putSubject(subject, values);
  };

  useEffect(() => {
    if (!subject) getSubject(id);
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
              initialValue={subject}
              submitCallback={submitUpdate(subject)}
            ></SubjectForm>
          </Card.Body>
        </Card>
      </AnimateHeight>
    </Fragment>
  );
};

export default withRouter(Subject);
