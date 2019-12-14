import React, { FC, useState, Fragment, useEffect, BaseSyntheticEvent } from "react";
import SubjectModel from "../models/subject.model";

interface Props {
  children: FC<{filteredList: SubjectModel[]}>;
  subjectsList: SubjectModel[];
}

export const SubjectsControlPanel: FC<Props> = ({ children, subjectsList }) => {
  const [searchResult, setSearchResult] = useState("");
  const [filteredList, setFilteredList] = useState(subjectsList);

  useEffect(() => {
    const searchRegEx = new RegExp(searchResult, "gi");
    if (!searchResult) {
      setFilteredList(subjectsList);
      return;
    }
    setFilteredList(
      subjectsList.filter(subject => subject.title.match(searchRegEx))
    );
  }, [searchResult, subjectsList]);

  const handleSearch = (event: BaseSyntheticEvent) => {
    setSearchResult(event.target.value)
  }

  return <Fragment>
    <input type="text" className="form-control form-control-sm" value={searchResult} onChange={handleSearch}/>
    {children({ filteredList })}
    </Fragment>;
};
