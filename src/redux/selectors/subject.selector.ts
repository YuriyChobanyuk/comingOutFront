import { RootState } from "./../rootReducer";
import { createSelector } from "reselect";

export const subjectsPagination = (state: RootState) =>
  state.subjectReducer.subjectsPagination;
export const subjects = (state: RootState) => state.subjectReducer.subjects;
export const subjectsFilters = (state: RootState) =>
  state.subjectReducer.subjectsFilters;

export const paginatorData = createSelector(
  [subjectsPagination],
  ({ limit, offset, page, pages, hasNextPage, hasPrevPage }) => ({
    limit,
    pages,
    offset,
    page,
    hasNextPage,
    hasPrevPage
  })
);
