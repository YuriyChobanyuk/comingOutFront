import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { History, Location } from "history";

import { getSubjectsList } from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";

interface Props {
  history: History;
  location: Location;
}

const SubjectsList: React.FC<Props> = ({ history, location }) => {
  const dispatch = useDispatch();

  const getSubjects = () => dispatch(getSubjectsList());

  const subjects = useSelector(
    ({ subjectReducer }: RootState) => subjectReducer.subjects
  );

  useEffect(() => {
    getSubjects();
  }, []);

  const moveToSubject = (id: string) => {
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <Table striped bordered hover size="sm" className="mt-3">
      <thead>
        <tr>
          <th>Title</th>
          <th>Coming date</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map(({ title, comingDate, category, _id }) => (
          <tr key={_id} onClick={moveToSubject.bind(null, _id)}>
            <td>{title}</td>
            <td>{comingDate}</td>
            <td>{category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default withRouter(SubjectsList);
