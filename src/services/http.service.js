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
    console.log(e.message);
  }
};
