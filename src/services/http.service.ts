import { PaginateResult } from "./../models/pagination.model";
import SubjectModel, {
  SubjectFormModel,
  SubjectQueryParams
} from "./../models/subject.model";
import axios, { AxiosResponse } from "axios";
import { reformatToMultipart } from "./forms.service";
import { pickBy, isNil } from "lodash";

export const postSubject = async (
  values: SubjectFormModel
): Promise<SubjectModel> => {
  try {
    const formData = reformatToMultipart(values);
    const result = await axios.post(`/subjects`, formData);
    return result.data;
  } catch (e) {
    throw new Error(`Post subject error: ${e.message}`);
  }
};

export const getSubjects = async (
  queryParams: SubjectQueryParams
): Promise<PaginateResult<SubjectModel>> => {
  let res: AxiosResponse<PaginateResult<SubjectModel>>;

  let paramsObj: SubjectQueryParams = pickBy(queryParams, item => !isNil(item));

  try {
    res = await axios.get(`/subjects`, {
      params: {
        ...paramsObj
      }
    });
  } catch (e) {
    throw new Error("Subjects get error: " + e.message);
  }
  return {...res.data, pages: res.data.totalPages};
};

export const getSubject = async (id: string): Promise<SubjectModel> => {
  let res: AxiosResponse<SubjectModel>;
  try {
    res = await axios.get(`/subjects/${id}`);
  } catch (e) {
    throw new Error("Subject get error: " + e.message);
  }

  return res.data;
};

export const updateSubject = async (
  subject: SubjectModel
): Promise<SubjectModel> => {
  try {
    const formData = reformatToMultipart(subject);
    const res = await axios.put(`/subjects`, formData);
    return res.data;
  } catch (e) {
    throw new Error("Subject update error: " + e.message);
  }
};

export const deleteSubject = async (
  subject: SubjectModel
): Promise<SubjectModel> => {
  console.log(subject);
  try {
    const res = await axios.delete(`/subjects`, {
      data: { ...subject }
    });
    return res.data;
  } catch (e) {
    throw new Error("Subject delete error: " + e.message);
  }
};
