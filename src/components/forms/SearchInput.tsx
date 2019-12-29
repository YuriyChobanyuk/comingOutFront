import React, { FC, ChangeEvent, FormEvent } from "react";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  value: string | null;
  setValue: (event: ChangeEvent) => void;
  id?: string;
}

export const SearchInput: FC<Props> = ({ setValue, value, id }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <label htmlFor={id || "default-search-id"}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </label>
      <input
        id={id || "default-search-id"}
        className="form-control form-control-sm ml-3 w-35"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={value || ''}
        onChange={setValue}
      />
    </form>
  );
};
