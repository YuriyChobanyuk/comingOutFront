import React from "react";
import { Form } from "react-bootstrap";

export const SelectInput = ({
  fieldName,
  handleChange,
  value,
  handleBlur,
  errors,
  touched,
  label,
  options
}) => (
  <Form.Group className="row align-items-baseline position-relative">
    <Form.Label className="col-2" htmlFor={fieldName}>
      {label}
    </Form.Label>
    <Form.Control
      className={`col ${touched ? (errors ? "is-invalid" : "is-valid") : ""}`}
      as="select"
      id={fieldName}
      name={fieldName}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    >
      {options.map(option => (
        <option
          value={option.value}
          disabled={!option.value}
          key={option.title}
        >
          {option.title}
        </option>
      ))}
    </Form.Control>
    <div className="invalid-feedback absolute-feedback">
      {errors ? errors : ""}
    </div>
  </Form.Group>
);
