import React from "react";
import SignUpFormTemplate from "./SignUpFormTemplate";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { SignUpModel } from "../../models/auth.model";

import { submitForm } from "../../services/forms.service";
import { AppThunk } from "../../redux/state.model";

interface Props {
  submitCallback: (values: SignUpModel) => Promise<any> | AppThunk;
}

const SignUpForm: React.FC<Props> = ({ submitCallback }) => {
  const submitLoginForm = async (values: SignUpModel, actions: FormikHelpers<SignUpModel>) => {
    await submitForm(values, actions, submitCallback);
  };

  const initialValues: SignUpModel = {
    name: "",
    email: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2)
      .max(20)
      .required("Name is required"),
    email: yup
      .string()
      .email()
      .required("Email is required"),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required("Password is required")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitLoginForm}
    >
      {props => <SignUpFormTemplate {...props}></SignUpFormTemplate>}
    </Formik>
  );
};

export default SignUpForm;
