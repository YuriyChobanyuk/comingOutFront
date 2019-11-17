import { apiURL } from "../configs";
import axios from "axios";

export const postSubject = async values => {
  const formData = new FormData();
  Object.keys(values).forEach(key => {
    if (values[key] instanceof File) {
      formData.append(key, values[key], values[key].name);
    } else {
      formData.append(key, values[key]);
    }
  });
  try {
    // #TODO notification service
    await axios.post(`${apiURL}/subjects`, formData);
  } catch (e) {
    throw new Error(`Post subject error: ${e.message}`);
  }
};

export const getSubjects = async () => {
  let res;
  try {
    res = await axios.get(`${apiURL}/subjects`);
  } catch (e) {
    throw new Error('Subjects get error: ' + e.message);
  }
  return res.data;
}