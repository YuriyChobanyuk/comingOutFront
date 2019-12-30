import { PaginationSort } from "./../../models/pagination.model";
import {
  UPDATE_SUBJECT_SEARCH,
  UPDATE_SUBJECT_ACTIVITY,
  UPDATE_SUBJECT_PAGINATION,
  APPEND_SUBJECT_PAGINATION,
  UPDATE_SUBJECT_PAGINATION_QUERY,
  UPDATE_SUBJECT_PAGINATION_SORT
} from "./../actions/actionTypes";
import {
  APPEND_SUBJECTS,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  UPDATE_SUBJECT,
  subjectActionTypes
} from "../actions/actionTypes";
import SubjectModel, { SubjectQueryParams } from "../../models/subject.model";
import { FilterActiveEvents, Direction } from "../../models/types.model";
import { PaginateResult } from "../../models/pagination.model";

export interface SubjectsInitialState {
  subjects: SubjectModel[];
  subjectsFilters: {
    search: string | null;
    activity: FilterActiveEvents | null;
  };
  subjectsPagination: PaginateResult<SubjectModel>;
  subjectSort: PaginationSort<{ [key: string]: Direction }> | null;
}

const initialState: SubjectsInitialState = {
  subjects: [],
  subjectsFilters: {
    search: null,
    activity: "All"
  },
  subjectsPagination: {
    docs: [],
    limit: 15,
    total: 1,
    offset: 0,
    page: 1,
    pages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: false,
    prevPage: false
  },
  subjectSort: null
};

const subjectReducer = (state = initialState, actions: subjectActionTypes) => {
  switch (actions.type) {
    case APPEND_SUBJECTS:
      return {
        ...state,
        subjects: [...actions.payload]
      };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: [...state.subjects, actions.payload]
      };
    case REMOVE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.filter(
          subject => subject && subject._id !== actions.payload._id
        )
      };
    case UPDATE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.map(subject => {
          if (actions.payload._id === subject._id) {
            return actions.payload;
          } else return subject;
        })
      };
    case UPDATE_SUBJECT_SEARCH:
      return {
        ...state,
        subjectsFilters: { ...state.subjectsFilters, search: actions.payload }
      };
    case UPDATE_SUBJECT_ACTIVITY:
      return {
        ...state,
        subjectsFilters: { ...state.subjectsFilters, activity: actions.payload }
      };
    case UPDATE_SUBJECT_PAGINATION:
      return {
        ...state,
        subjectsPagination: actions.payload
      };
    case APPEND_SUBJECT_PAGINATION:
      return {
        ...state,
        subjectsPagination: actions.payload
      };
    case UPDATE_SUBJECT_PAGINATION_QUERY:
      return {
        ...state,
        subjectsPagination: {
          ...state.subjectsPagination,
          ...(actions.payload as Pick<SubjectQueryParams, "limit" | "page">)
        }
      };
    case UPDATE_SUBJECT_PAGINATION_SORT:
      return {
        ...state,
        subjectSort: actions.payload
      };
    default:
      return state;
  }
};

export default subjectReducer;
