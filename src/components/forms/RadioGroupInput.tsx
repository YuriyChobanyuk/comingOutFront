import React, { BaseSyntheticEvent, FC } from "react";

interface Props {
  values: { value: string; label?: string }[];
  setValue: (event: BaseSyntheticEvent) => void;
  checked: string;
  name: string;
}

export const RadioGroupImport: FC<Props> = ({
  checked,
  setValue,
  values,
  name
}) => {
  return (
    <div className="d-flex">
      {values.map(({ label, value }) => (
        <div className="custom-control custom-radio m-2">
          <input
            type="radio"
            className="custom-control-input"
            name={name}
            value={value}
            checked={checked === value}
            onChange={setValue}
            id={value + "-id"}
          />
          <label className="custom-control-label" htmlFor={value + "-id"}>
            {label || value}
          </label>
        </div>
      ))}
    </div>
  );
};
