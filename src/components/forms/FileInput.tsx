import React, { useState, FC, FocusEvent, FormEvent } from "react";
import { Form } from "react-bootstrap";
import { SubjectFormModel } from "../../models/subject.model";

interface Props {
  fieldName: keyof SubjectFormModel;
  handleBlur: (e: FocusEvent) => void;
  errors?: string;
  touched?: boolean;
  label: string;
  setFieldValue: (field: keyof SubjectFormModel, value: any) => void;
  fileName?: string;
  setFileName: (fileName: string) => void;
  accept: string;
}

export const FileInput: FC<Props> = ({
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

  const handleFile = (e: FormEvent) => {
    if (!e || !e.target || !e.currentTarget) return null;
    // @ts-ignore
    setFiles(e.currentTarget.files);
    // @ts-ignore
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
        // @ts-ignore
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
        <div className="invalid-feedback">{errors ? errors : ""}</div>
      </div>
    </Form.Group>
  );
};
