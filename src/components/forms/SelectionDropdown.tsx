import React, { BaseSyntheticEvent, ReactElement } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Variants } from "../../models/bootstrap.model";

interface Props<T extends string> {
  title: string;
  variant?: Variants;
  events: T[];
  id?: string;
  setValue: (value: T) => void;
  selected: T | null;
}

export const SelectionDropdown: <T extends string>(p: Props<T>) => ReactElement = ({
  events,
  title,
  variant,
  id,
  setValue,
  selected
}) => {

  const handleSelect = (eventKey: any, event: BaseSyntheticEvent) => {
    setValue(eventKey);
  };

  return (
    <DropdownButton
      title={title}
      variant={variant || "primary"}
      id={id || `selection-dropdown-${title}`}
      key={variant}
    >
      {events.map(event => (
        <Dropdown.Item eventKey={event} onSelect={handleSelect} active={selected === event}>
          {event}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
