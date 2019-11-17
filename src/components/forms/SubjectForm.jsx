import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import { validateDate } from "../../services/date.service";
import { submitForm } from "../../services/forms.service";

import { SubjectFormTemplate } from "./SubjectFromTemplate";

export const SubjectForm = ({ submitCallback }) => {
  const [fileName, setFileName] = useState("Choose file...");

  const submitSubjectForm = async (values, actions) => {
    await submitForm(values, actions, submitCallback, setFileName);
  };

  const SubjectSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    comingDate: yup.string().required("Coming date is required"),
    pendingDate: yup
      .string()
      .test("is-up-from-now", "Pending date should not be past", value => {
        return validateDate(value);
      })
      .required("Pending date is required"),
    category: yup.string().required("Category is required"),
    imgFile: yup
      .object()
      .required("Image is required")
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
      onSubmit={submitSubjectForm}
    >
      {props => (
        <SubjectFormTemplate
          {...props}
          fileName={fileName}
          setFileName={setFileName}
        />
      )}
    </Formik>
  );
};
