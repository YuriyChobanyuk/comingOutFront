import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { DataTable } from "./DataTable";
import SubjectModel from "../models/subject.model";
import { SubjectsControlPanel } from "./SubjectsControlPanel";
import { format } from "date-fns";
import { getSubjectsListWithDebounce } from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";
import { FilterActiveEvents } from "../models/types.model";

const SubjectsList: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { search, activity } = useSelector(
    ({ subjectReducer }: RootState) => subjectReducer.subjectsFilters
  );

  const getSubjects = (
    search: string | null,
    activity: FilterActiveEvents | null
  ) => dispatch(getSubjectsListWithDebounce(search, activity));

  const subjects = useSelector(({ subjectReducer }: RootState) =>
    subjectReducer.subjects.map(subject => ({
      ...subject,
      pendingDate: format(new Date(subject.pendingDate), "d MMM yyyy")
    }))
  );

  useEffect(() => {
    getSubjects(search, activity);
  }, [search, activity]);

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
          responsive={true}
          variant={"light"}
          cssClasses={["cursor-pointer"]}
        ></DataTable>
      )}
    </SubjectsControlPanel>
  );
};

export default SubjectsList;
