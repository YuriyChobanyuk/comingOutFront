import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export const FileInput = ({
  fieldName,
  handleBlur,
  errors,
  touched,
  label,
  setFieldValue,
}) => {
  const [fileName, setFileName] = useState('Choose file...');

  const handleFile = e => {
    const file = e.currentTarget.files[0];
    setFieldValue(fieldName, file);
    setFileName(file.name);
  };

  return (
    <Form.Group className="row align-items-center">
      <div className="col-2">{label}</div>
      <div className="custom-file col">
        <Form.Control
          className={`col custom-file-input ${
            errors && touched ? 'is-invalid' : ''
          }`}
          type="file"
          id={fieldName}
          name={fieldName}
          onChange={handleFile}
          onBlur={handleBlur}
        />
        <label className="custom-file-label" htmlFor={fieldName}>
          {fileName}
        </label>
      </div>

      <div className="invalid-feedback">{errors ? errors.join('. ') : ''}</div>
    </Form.Group>
  );
};
