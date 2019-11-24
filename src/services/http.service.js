import { apiURL } from "../configs";
import axios from "axios";
import {reformatToMultipart} from './forms.service';

export const postSubject = async values => {
  
  try {
    const formData = reformatToMultipart(values);
    const result = await axios.post(`${apiURL}/subjects`, formData);
    return result.data;
  } catch (e) {
    throw new Error(`Post subject error: ${e.message}`);
  }
};

export const getSubjects = async () => {
  let res;
  try {
    res = await axios.get(`${apiURL}/subjects`);
  } catch (e) {
    throw new Error("Subjects get error: " + e.message);
  }
  return res.data;
};

export const getSubject = async id => {
  let res;
  try {
    res = await axios.get(`${apiURL}/subjects/${id}`);
  } catch (e) {
    throw new Error("Subject get error: " + e.message);
  }

  return res.data;
};

export const updateSubject = async subject => {
  try {
    const formData = reformatToMultipart(subject);
    const res = await axios.put(`${apiURL}/subjects`, formData);
    return res.data;
  } catch (e) {
    throw new Error("Subject update error: " + e.message);
  }
};

export const deleteSubject = async subject => {
  try {
    const res = await axios.delete(`${apiURL}/subjects`, subject);
    return res.data;
  } catch (e) {
    throw new Error("Subject delete error: " + e.message);
  }
}