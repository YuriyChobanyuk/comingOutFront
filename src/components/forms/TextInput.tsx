import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
  fieldName: string;
  handleChange: (e: ChangeEvent) => void;
  value: string;
  handleBlur: (e: FocusEvent) => void;
  errors?: string;
  touched?: boolean;
  label: string;
  placeholder: string;
  type?: string;
}

export const TextInput: React.FC<Props> = ({
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
  <div className="form-group mb-3 row align-items-baseline position-relative">
    {label ? (
      <label className="col-2" htmlFor={fieldName}>
        {label}
      </label>
    ) : (
      false
    )}
    <input
      className={`col form-control ${touched ? (errors ? "is-invalid" : "is-valid") : ""}`}
      type={type ? type : "text"}
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
  </div>
);
