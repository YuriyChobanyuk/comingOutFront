import React from "react";
import SignUpFormTemplate from "./SignUpFormTemplate";
import { Formik } from "formik";
import * as yup from "yup";
import { SignUpModel } from "../../models/auth.model";

import { submitForm } from "../../services/forms.service";

interface Props {
  submitCallback: (values: object) => Promise<any>;
}

const LoginForm: React.FC<Props> = ({ submitCallback }) => {
  const submitLoginForm = async (values, actions) => {
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

export default LoginForm;
