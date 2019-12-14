import React, { ChangeEvent, FocusEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { TextInput } from "./TextInput";
import {SignUpModel} from '../../models/auth.model';
import { FormikErrors, FormikTouched } from "formik";

interface Props {
  values: SignUpModel;
  errors: FormikErrors<SignUpModel>;
  touched: FormikTouched<SignUpModel>;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  handleSubmit: () => void;
}

const SignUpFormTemplate: React.FC<Props> = ({
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
        id={"signUp-name"}
        type={"text"}
        fieldName={"name"}
        value={values.name}
        errors={errors.name}
        touched={touched.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder="Enter name"
      ></TextInput>

      <TextInput
        id={"signUp-email"}
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
        id={"signUp-password"}
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
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpFormTemplate;
