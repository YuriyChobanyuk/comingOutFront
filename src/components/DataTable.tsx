import React, { ReactElement } from "react";
import { Table } from "react-bootstrap";
import { Direction } from "../models/types.model";
import { TableHeader } from "./TableHeader";
import { PaginationSort } from "../models/pagination.model";

interface Props<V> {
  data: V[];
  fields: Extract<keyof V, string>[];
  recordAction?: Function;
  responsive?: boolean;
  variant?: "dark" | "light";
  cssClasses?: string[];
  setSort: (sort: PaginationSort<{ [key: string]: Direction }> | null) => void;
  sort: PaginationSort<{ [key: string]: Direction }> | null;
}

export const DataTable: <T extends { _id: string }>(
  p: Props<T>
) => ReactElement<Props<T>> = ({
  data,
  fields,
  recordAction,
  responsive,
  variant,
  cssClasses,
  setSort,
  sort
}) => {
  const [field, direction] = sort ? Object.entries(sort)[0] : [null, null];

  const headerFields = fields.filter(field => typeof field === "string");

  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      className={`${cssClasses && cssClasses.join(" ")}`}
      responsive={responsive}
      variant={variant}
    >
      <TableHeader
        activeField={field}
        fields={headerFields}
        direction={direction}
        setSort={setSort}
        skipFields={["comingDate"]}
      ></TableHeader>
      <tbody>
        {data.map(item => (
          <tr
            key={item._id}
            onClick={recordAction && recordAction.bind(null, item._id)}
          >
            {fields.map((field, index) => (
              <td key={index}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
