import React from "react";
import { Form, Button } from "react-bootstrap";
import { TextInput } from "./TextInput";

const LoginFormTemplate = ({
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
