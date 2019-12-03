import React from "react";
import LoginFormTemplate from "./LoginFormTemplate";
import { Formik } from "formik";
import * as yup from "yup";
import PropTypes from 'prop-types';

import { submitForm } from "../../services/forms.service";

const LoginForm = ({ submitCallback }) => {
  const submitLoginForm = async (values, actions) => {
    await submitForm(values, actions, submitCallback);
  };

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
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
      {props => <LoginFormTemplate {...props}></LoginFormTemplate>}
    </Formik>
  );
};

LoginForm.propTypes = {
  submitCallback: PropTypes.func
}

export default LoginForm;
