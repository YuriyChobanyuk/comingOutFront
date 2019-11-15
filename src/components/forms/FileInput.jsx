import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

export const FileInput = ({
  fieldName,
  handleBlur,
  errors,
  touched,
  label,
  setFieldValue,
  fileName,
  setFileName,
  accept
}) => {

  const [files, setFiles] = useState([]);

  const handleFile = e => {
    setFiles(e.currentTarget.files);
    const file = e.currentTarget.files[0];
    if (file) {
      setFieldValue(fieldName, file);
      setFileName(file.name);
      setFiles([]);
    }
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
          accept={accept}
          id={fieldName}
          name={fieldName}
          onChange={handleFile}
          onBlur={handleBlur}
          files={files}
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
