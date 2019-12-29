import React, { SyntheticEvent, FC } from "react";

interface Props {
  label: string;
  setValue: (event: SyntheticEvent) => void;
  value: boolean;
}

export const CheckboxInput: FC<Props> = ({ label, setValue, value }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={label + "-id"}
        checked={value}
        onChange={setValue}
      />
      <label className="custom-control-label" htmlFor={label + "-id"}>
        {label}
      </label>
    </div>
  );
};
