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
  size?: 'lg' | 'sm';
}

export const SelectionDropdown: <T extends string>(
  p: Props<T>
) => ReactElement = ({ events, title, variant, id, setValue, selected, size }) => {
  const handleSelect = (eventKey: any, event: BaseSyntheticEvent) => {
    setValue(eventKey);
  };

  return (
    <DropdownButton
      title={title}
      variant={variant || "primary"}
      id={id || `selection-dropdown-${title}`}
      key={variant}
      size={size || 'sm'}
    >
      {events.map(event => (
        <Dropdown.Item
          eventKey={event}
          onSelect={handleSelect}
          active={selected === event}
          key={event + "-key"}
        >
          {event}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
