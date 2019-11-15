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
  label
}) => (
  <Form.Group className="row align-items-baseline position-relative">
    <Form.Label className="col-2" htmlFor={fieldName}>
      {label}
    </Form.Label>
    <Form.Control
      className={`col ${touched ? (errors ? "is-invalid" : "is-valid") : ""}`}
      type="text"
      placeholder={placeholder}
      id={fieldName}
      name={fieldName}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
    <div className="invalid-feedback absolute-feedback">
      {errors ? errors : ""}
    </div>
  </Form.Group>
);
