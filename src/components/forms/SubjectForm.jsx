import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import {validateDate} from '../../services/date.service';

import { SubjectFormTemplate } from "./SubjectFromTemplate";

export const SubjectForm = () => {
  const SubjectSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    comingDate: yup.string().required("Coming date is required"),
    pendingDate: yup
      .string().test(
        "is-up-from-now",
        "Pending date should not be past",
        value => {
          return validateDate(value);
        }
      )
      .required("Pending date is required"),
    category: yup.string().required("Category is required"),
    imgFile: yup
      .object()
      .test(
        "is-file",
        "Uploaded item is not image",
        value => value instanceof File
      )
      .nullable()
  });
  return (

    <Formik
      initialValues={{
        title: "",
        comingDate: "",
        pendingDate: "",
        category: "",
        imgFile: null
      }}
      validationSchema={SubjectSchema}
      onSubmit={(values, actions) => {
        console.log(`values: `, values);
        actions.setSubmitting(false);
      }}
    >
      {props => <SubjectFormTemplate {...props} />}
    </Formik>
  );
};
