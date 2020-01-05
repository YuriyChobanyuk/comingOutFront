import React from "react";
import { camelToPascal } from "../services/pipe.service";
import { Direction } from "../models/types.model";
import { PaginationSort } from "../models/pagination.model";

interface Props {
  fields: string[];
  activeField: string | null;
  setSort: (sort: PaginationSort | null) => void;
  direction: Direction;
  skipFields?: string[];
}

export const TableHeader: React.FC<Props> = ({
  fields,
  activeField,
  direction,
  setSort,
  skipFields = []
}) => {
  const handleHeaderClick = (field: string) => {
    let newDir: Direction = "desc";
    let newField: string | null = field;
    if (field === activeField) {
      switch (direction) {
        case "desc":
          newDir = "asc";
          break;
        case "asc":
          newField = null;
          newDir = null;
          break;
        case null:
          newDir = "desc";
          break;
      }
    }

    const newSort = newField
      ? ({ [newField]: newDir } as PaginationSort)
      : null;
    setSort(newSort);
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
