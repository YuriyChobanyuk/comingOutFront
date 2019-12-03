import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
  fieldName: string;
  handleChange: (e: ChangeEvent) => void;
  value: string;
  handleBlur: (e: FocusEvent) => void;
  errors?: string;
  touched?: boolean;
  label: string;
  options: { value: string; title: string }[];
}

export const SelectInput: React.FC<Props> = ({
         fieldName,
         handleChange,
         value,
         handleBlur,
         errors,
         touched,
         label,
         options
       }) => (
         <div className="row mb-3 form-group align-items-baseline position-relative">
           <label className="col-2" htmlFor={fieldName}>
             {label}
           </label>
           <select
             className={`col custom-select ${
               touched ? (errors ? "is-invalid" : "is-valid") : ""
             }`}
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
           </select>
           <div className="invalid-feedback absolute-feedback">
             {errors ? errors : ""}
           </div>
         </div>
       );
