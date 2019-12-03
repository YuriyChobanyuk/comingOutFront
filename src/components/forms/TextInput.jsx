import React from "react";
import { Form } from "react-bootstrap";

export const TextInput = ({
  fieldName,
  handleChange,
  value,
  handleBlur,
  errors,
  touched,
  placeholder,
  label,
  type
}) => (
  <Form.Group className="row align-items-baseline position-relative">
    {label ? (
      <Form.Label className="col-2" htmlFor={fieldName}>
        {label}
      </Form.Label>
    ) : (
      false
    )}
    <Form.Control
      className={`col ${touched ? (errors ? "is-invalid" : "is-valid") : ""}`}
      type={type ? type : "text"}
      placeholder={placeholder}
      id={fieldName}
      name={fieldName}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
    <div
      className={["invalid-feedback", label ? "absolute-feedback" : ""].join(
        " "
      )}
    >
      {errors ? errors : ""}
    </div>
  </Form.Group>
);
