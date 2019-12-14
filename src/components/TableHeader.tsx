import React from "react";
import { camelToPascal } from "../services/pipe.service";
import { Direction } from "../models/types.model";

interface Props {
  fields: string[];
  activeField: string;
  setActiveField: (actField: string) => void;
  direction: Direction;
  setDirection: (dir: Direction) => void;
}

export const TableHeader: React.FC<Props> = ({
  fields,
  activeField,
  direction,
  setActiveField,
  setDirection
}) => {
  const handleHeaderClick = (field: string) => {
    if (activeField === field) {
      switch (direction) {
        case "increase":
          setDirection("decrease");
          break;
        case "decrease":
          setDirection('source');
          setActiveField('unselected');
          break;
        case 'source':
          setDirection("increase");
          break;
      }
      return;
    }
    setActiveField(field);
    setDirection("increase");
  };

  return (
    <thead>
      <tr>
        {fields.map((field, i) => (
          <th
            key={i}
            className={[
              "table__header",
              (activeField === field &&
                direction &&
                `table__header_${direction}`) ||
                ""
            ].join(" ")}
            onClick={handleHeaderClick.bind(null, field)}
          >
            {camelToPascal(field)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
