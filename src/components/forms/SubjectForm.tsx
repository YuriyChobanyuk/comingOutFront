import React, { useState, useEffect } from "react";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import {
  validateDate,
  transformDateToInput
} from "../../services/date.service";
import { submitForm } from "../../services/forms.service";
import {SubjectFormModel} from '../../models/subject.model';
import { SubjectFormTemplate } from "./SubjectFromTemplate";

interface Props {
  initialValue?: SubjectFormModel;
  submitCallback: () => void;
}

const SubjectForm: React.FC<Props> = ({
  submitCallback,
  initialValue
}) => {
  const [fileName, setFileName] = useState(
    initialValue && initialValue.imgPath ? initialValue.imgPath.split("/").pop() : "Choose file..."
  );

  useEffect(() => {
    
    if (initialValue && initialValue.imgPath)
      setFileName(initialValue.imgPath.split("/").pop());
  }, [initialValue])

  const initialValues = initialValue
    ? {
        ...initialValue,
        pendingDate: transformDateToInput(initialValue.pendingDate)
      }
    : {
        title: "",
        comingDate: "",
        pendingDate: "",
        category: "",
        imgFile: null
      };

  const submitSubjectForm = async (
    values: SubjectFormModel,
    actions: FormikHelpers<SubjectFormModel>
  ) => {
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
    imgFile: yup.object().nullable()
  });

  return (
    <Formik
      initialValues={initialValues}
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

export default SubjectForm;
