import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { DataTable } from "./DataTable";
import SubjectModel from "../models/subject.model";
import { SubjectsControlPanel } from "./SubjectsControlPanel";

import { getSubjectsList } from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";

const SubjectsList: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

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
    <SubjectsControlPanel subjectsList={subjects}>
      {({ filteredList }) => (
        <DataTable<SubjectModel>
          data={filteredList}
          fields={["title", "comingDate", "category", "pendingDate"]}
          recordAction={moveToSubject}
        ></DataTable>
      )}
    </SubjectsControlPanel>
  );
};

export default SubjectsList;
