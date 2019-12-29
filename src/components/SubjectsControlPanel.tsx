import React, { FC, useState, useEffect, BaseSyntheticEvent } from "react";
import SubjectModel from "../models/subject.model";
import { SearchInput } from "./forms/SearchInput";
import { SelectionDropdown } from "./forms/SelectionDropdown";
import { FilterActiveEvents } from "../models/types.model";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubjectSearch,
  updateSubjectActivity
} from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";
import { debounce } from "lodash";

interface Props {
  children: FC<{ filteredList: SubjectModel[] }>;
  subjectsList: SubjectModel[];
}

export const SubjectsControlPanel: FC<Props> = ({ children, subjectsList }) => {
  const [filteredList, setFilteredList] = useState(subjectsList);
  const activityEvents: FilterActiveEvents[] = ["All", "Active", "Inactive"];

  const dispatch = useDispatch();
  const { search, activity } = useSelector(
    ({ subjectReducer }: RootState) => subjectReducer.subjectsFilters
  );

  const updateSearch = debounce(
    (search: string | null) => {
      dispatch(updateSubjectSearch(search));
    },
    300,
    { leading: true, trailing: true }
  );

  const updateActivity = debounce(
    (activity: FilterActiveEvents | null) => {
      dispatch(updateSubjectActivity(activity));
    },
    300,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    const searchRegEx = new RegExp(search || "", "gi");

    const searchMatch = (searchRegEx: RegExp, targetStr: string): boolean =>
      search ? !!targetStr.match(searchRegEx) : true;

    setFilteredList(
      subjectsList.filter(subject => {
        switch (activity) {
          case "Active": {
            return (
              searchMatch(searchRegEx, subject.title) && subject.active === true
            );
          }
          case "Inactive": {
            return (
              searchMatch(searchRegEx, subject.title) &&
              subject.active === false
            );
          }
          case "All": {
            return searchMatch(searchRegEx, subject.title);
          }
        }
        return true;
      })
    );
  }, [search, subjectsList, activity]);

  const handleSearch = (event: BaseSyntheticEvent) => {
    updateSearch(event.target.value);
  };

  const handleActive = (value: FilterActiveEvents) => {
    updateActivity(value);
  };

  return (
    <>
      <div className="subject-control-panel mt-2">
        <div className="row justify-content-between">
          <SelectionDropdown
            events={activityEvents}
            setValue={handleActive}
            title={`Actuality: ${activity}`}
            selected={activity}
          ></SelectionDropdown>

          <SearchInput value={search} setValue={handleSearch}></SearchInput>
        </div>
      </div>
      {children({ filteredList })}
    </>
  );
};
