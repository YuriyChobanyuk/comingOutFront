import React from "react";
import LoginFormTemplate from "./LoginFormTemplate";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import {LoginModel} from '../../models/auth.model';

import { submitForm } from "../../services/forms.service";

interface Props {
  submitCallback: (values: object) => Promise<any>;
}

const LoginForm: React.FC<Props> = ({ submitCallback }) => {
  const submitLoginForm = async (values: LoginModel, actions: FormikHelpers<LoginModel>) => {
    await submitForm(values, actions, submitCallback);
  };

  const initialValues: LoginModel = {
    email: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6)
      .max(50)
      .required("Password is required")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitLoginForm}
    >
      {props => <LoginFormTemplate {...props}></LoginFormTemplate>}
    </Formik>
  );
};

export default LoginForm;
