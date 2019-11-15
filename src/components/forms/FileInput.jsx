import React from 'react';
import { Form } from 'react-bootstrap';

export const FileInput = ({
  fieldName,
  handleBlur,
  errors,
  touched,
  label,
  setFieldValue,
  fileName,
  setFileName
}) => {

  const handleFile = e => {
    const file = e.currentTarget.files[0] || 'Choose file...';
    setFieldValue(fieldName, file);
    setFileName(file.name);
  };

  return (
    <Form.Group className="row align-items-center position-relative">
      <div className="col-2">{label}</div>
      <div className="custom-file col">
        <Form.Control
          className={`col custom-file-input ${
            touched ? (errors ? "is-invalid" : "is-valid") : ""
          }`}
          type="file"
          accept=".jpg, .jpeg, .png"
          id={fieldName}
          name={fieldName}
          onChange={handleFile}
          onBlur={handleBlur}
        />
        <label className="custom-file-label" htmlFor={fieldName}>
          {fileName}
        </label>
        <div className="invalid-feedback">
          {errors ? errors : ""}
        </div>
      </div>
    </Form.Group>
  );
};
