import React from 'react';
import { Form } from 'react-bootstrap';

export const DateInput = ({
  fieldName,
  handleChange,
  value,
  handleBlur,
  errors,
  touched,
  label,
}) => (
  <Form.Group className="row align-items-baseline">
    <Form.Label className="col-2" htmlFor={fieldName}>
      {label}
    </Form.Label>
    <Form.Control
      className={`col ${errors && touched ? 'is-invalid' : ''}`}
      type="date"
      id={fieldName}
      name={fieldName}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
    <div className="invalid-feedback">{errors ? errors.join('. ') : ''}</div>
  </Form.Group>
);
