import React, { FC, BaseSyntheticEvent } from "react";
import SubjectModel from "../models/subject.model";
import { SearchInput } from "./forms/SearchInput";
import { SelectionDropdown } from "./forms/SelectionDropdown";
import { FilterActiveEvents, ControlOptions } from "../models/types.model";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubjectSearch,
  updateSubjectActivity,
  putSubject,
  deleteSubject
} from "../redux/actions/subject.action";
import { RootState } from "../redux/rootReducer";
import { debounce } from "lodash";
import { useHistory, useLocation } from "react-router";
import { addModal, removeModal } from "../redux/actions/modal.action";

interface Props {
  children: FC<{
    data: (SubjectModel & { options: ControlOptions<SubjectModel> })[];
  }>;
  subjectsList: SubjectModel[];
}

export const SubjectsControlPanel: FC<Props> = ({ children, subjectsList }) => {
  const activityEvents: FilterActiveEvents[] = ["All", "Active", "Inactive"];
  const history = useHistory();
  const location = useLocation();

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

  const handleSearch = (event: BaseSyntheticEvent) => {
    updateSearch(event.target.value);
  };

  const handleActive = (value: FilterActiveEvents) => {
    updateActivity(value);
  };

  const moveTo = (id: string) => {
    history.push(`${location.pathname}/${id}`);
  };

  const subjectOptions: {
    title: string;
    action: (subject: SubjectModel) => void;
  }[] = [
    {
      title: "edit",
      action: subject => moveTo(subject._id)
    },
    {
      title: "deactivate",
      action: subject => {
        const id = Date.now();
        dispatch(
          addModal(
            {
              confirmAction: () => {
                dispatch(putSubject(subject, { active: !subject.active }));
              },
              declineAction: () => dispatch(removeModal(id)),
              text: `Are you sure you want to set ${subject.title} record to unactive?`,
              title: `Deactivate subject?`
            },
            id
          )
        );
      }
    },
    {
      title: "delete",
      action: subject => {
        const id = Date.now();
        dispatch(
          addModal(
            {
              confirmAction: () => deleteSubject(subject),
              declineAction: () => dispatch(removeModal(id)),
              text: `Are you sure you want to delete ${subject.title} record?`,
              title: `Delete subject?`
            },
            id
          )
        );
      }
    }
  ];

  const optList = subjectsList.map(subject => ({
    ...subject,
    options: subjectOptions
  }));

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
      {children({ data: optList })}
    </>
  );
};
