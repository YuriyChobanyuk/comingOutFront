import SubjectModel, { SubjectFormModel } from "./../models/subject.model";
import axios, { AxiosResponse } from "axios";
import { reformatToMultipart } from "./forms.service";

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

export const getSubjects = async (): Promise<{
  subjectsList: SubjectModel[];
}> => {
  let res: AxiosResponse<{ subjectsList: SubjectModel[] }>;
  try {
    res = await axios.get(`/subjects`);
  } catch (e) {
    throw new Error("Subjects get error: " + e.message);
  }
  return res.data;
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
