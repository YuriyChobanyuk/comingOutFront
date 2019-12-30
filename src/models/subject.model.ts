import { PaginationSort } from './pagination.model';
import { FilterActiveEvents, Direction } from "./types.model";

export default interface SubjectModel {
  title: string;
  active: boolean;
  comingDate: string;
  pendingDate: string;
  creationDate: string;
  category: string;
  _id: string;
  imgPath: string;
}

export interface SubjectFormModel {
  title: string;
  comingDate: string;
  pendingDate: string;
  category: string;
  imgFile?: File | null;
  imgPath?: string;
}

export interface SubjectQueryParams {
  search?: string | null,
  activity?: FilterActiveEvents | null,
  limit?: number,
  page?: number,
  sort?: PaginationSort<{[key: string]: Direction}> | null
}