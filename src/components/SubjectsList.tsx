import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { DataTable } from "./DataTable";
import SubjectModel from "../models/subject.model";
import { SubjectsControlPanel } from "./SubjectsControlPanel";
import { format } from "date-fns";
import {
  getSubjectsListWithDebounce,
  updateSubjPugQuery,
  updateSubjPugSort
} from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";
import { Paginator } from "./Paginator";
import { paginatorData } from "../redux/selectors/subject.selector";
import { PaginationSort } from "../models/pagination.model";
import { Direction } from "tty";

const SubjectsList: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { search, activity } = useSelector(
    ({ subjectReducer }: RootState) => subjectReducer.subjectsFilters
  );

  const { limit, page, pages, hasNextPage, hasPrevPage } = useSelector(paginatorData);
  const sort = useSelector((state: RootState) => state.subjectReducer.subjectSort);

  const subjects = useSelector(({ subjectReducer }: RootState) =>
    subjectReducer.subjects.map(subject => ({
      ...subject,
      pendingDate: format(new Date(subject.pendingDate), "d MMM yyyy")
    }))
  );

  useEffect(() => {
    dispatch(
      getSubjectsListWithDebounce({ search, activity, limit, page: page || 1, sort })
    );
  }, [search, activity, dispatch, limit, page, sort]);

  const moveToSubject = (id: string) => {
    history.push(`${location.pathname}/${id}`);
  };

  const setPage = (page: number) => {
    dispatch(updateSubjPugQuery({ limit, page }));
  };

  const setLimit = (limit: number) => {
    dispatch(updateSubjPugQuery({ limit, page }));
  };

  const setSort = (sort: PaginationSort<{[key: string]: Direction}> | null) => {
    dispatch(updateSubjPugSort(sort))
  }

  return (
    <SubjectsControlPanel subjectsList={subjects}>
      {({ filteredList }) => (
        <>
          <DataTable<SubjectModel>
            data={filteredList}
            fields={["title", "comingDate", "category", "pendingDate"]}
            recordAction={moveToSubject}
            responsive={true}
            variant={"light"}
            cssClasses={["cursor-pointer"]}
            setSort={setSort}
            sort={sort}
          ></DataTable>
          <Paginator
            limit={limit}
            page={page}
            pages={pages}
            setPage={setPage}
            setLimit={setLimit}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </>
      )}
    </SubjectsControlPanel>
  );
};

export default SubjectsList;
