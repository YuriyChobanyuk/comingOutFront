import React from "react";
import { camelToPascal } from "../services/pipe.service";
import { Direction } from "../models/types.model";

interface Props {
  fields: string[];
  activeField: string | null;
  setActiveField: (actField: string) => void;
  direction: Direction;
  setDirection: (dir: Direction) => void;
  skipFields?: string[];
}

export const TableHeader: React.FC<Props> = ({
  fields,
  activeField,
  direction,
  setActiveField,
  setDirection,
  skipFields = []
}) => {
  const handleHeaderClick = (field: string) => {
    if (activeField === field) {
      switch (direction) {
        case "increase":
          setDirection("decrease");
          break;
        case "decrease":
          setDirection("source");
          setActiveField("unselected");
          break;
        case "source":
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
        {fields.map((field, i) => {
          return skipFields.includes(field) ? (
            <th key={i} className={"table__header"}>
              {camelToPascal(field)}
            </th>
          ) : (
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
          );
        })}
      </tr>
    </thead>
  );
};
