import React, { FC, FocusEvent } from "react";
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
  const handleFile = (files: FileList | null) => {
    if (!files) return;
    const file = files[0];
    if (file) {
      setFieldValue(fieldName, file);
      setFileName(file.name);
    }
  };

  return (
    <div className="form-group mb-3 row align-items-center position-relative">
      <div className="col-2">{label}</div>
      <div className="custom-file col">
        // @ts-ignore
        <input
          className={`col form-control custom-file-input ${
            touched ? (errors ? "is-invalid" : "is-valid") : ""
          }`}
          type="file"
          accept={accept}
          id={fieldName}
          name={fieldName}
          onChange={e => {
            handleFile(e.target.files);
          }}
          onBlur={handleBlur}
        />
        <label className="custom-file-label" htmlFor={fieldName}>
          {fileName}
        </label>
        <div className="invalid-feedback">{errors ? errors : ""}</div>
      </div>
    </div>
  );
};
