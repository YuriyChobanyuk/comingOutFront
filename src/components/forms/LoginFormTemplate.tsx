import React, { ChangeEvent, FocusEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { TextInput } from "./TextInput";
import { LoginModel } from "../../models/auth.model";
import { FormikErrors, FormikTouched } from "formik";

interface Props {
  values: LoginModel;
  errors: FormikErrors<LoginModel>;
  touched: FormikTouched<LoginModel>;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  handleSubmit: () => void;
}

const LoginFormTemplate: React.FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <TextInput
        id={"login-email"}
        type={"email"}
        fieldName={"email"}
        value={values.email}
        errors={errors.email}
        touched={touched.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder="Enter email"
      ></TextInput>

      <TextInput
        id={"login-password"}
        type={"password"}
        fieldName={"password"}
        value={values.password}
        errors={errors.password}
        touched={touched.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder="Enter password"
      ></TextInput>

      <Button className="mt-3 mx-auto d-block" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginFormTemplate;
