import React, { FocusEvent, FC, ChangeEvent } from "react";

interface Props {
  fieldName: string;
  handleChange: (e: ChangeEvent) => void;
  value: string;
  handleBlur: (e: FocusEvent) => void;
  errors?: string;
  touched?: boolean;
  label: string;
}

export const DateInput: FC<Props> = ({
         fieldName,
         handleChange,
         value,
         handleBlur,
         errors,
         touched,
         label
       }) => (
         <div className="form group mb-3 row align-items-baseline position-relative">
           <label className="col-2" htmlFor={fieldName}>
             {label}
           </label>
           <input
             className={`col form-control ${
               touched ? (errors ? "is-invalid" : "is-valid") : ""
             }`}
             type="date"
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
