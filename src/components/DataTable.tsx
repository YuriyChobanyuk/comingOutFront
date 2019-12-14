import React, { ReactElement, useState } from "react";
import { Table } from "react-bootstrap";
import { Direction } from "../models/types.model";
import { TableHeader } from "./TableHeader";

interface Props<V> {
  data: V[];
  fields: Extract<keyof V, string>[];
  recordAction?: Function;
}

export const DataTable: <T extends { _id: string }>(
  p: Props<T>
) => ReactElement<Props<T>> = ({ data, fields, recordAction }) => {
  const [filterField, setFilterField] = useState<string>("unselected");
  const [filterDirection, setFilterDirection] = useState<Direction>("source");

  const headerFields = fields.filter(field => typeof field === "string");

  const sortCompare = (
    item1: typeof data[number],
    item2: typeof data[number]
  ): number => {
    if (filterDirection === "source" || filterField === "unselected") return 0;
    if (filterDirection === "decrease") {
      return item1[filterField] > item2[filterField] ? 1 : -1;
    } else {
      return item1[filterField] > item2[filterField] ? -1 : 1;
    }
  };

  const sortedData = data.sort((item1, item2) => sortCompare(item1, item2));

  return (
    <Table striped bordered hover size="sm" className="mt-3">
      <TableHeader
        activeField={filterField}
        fields={headerFields}
        direction={filterDirection}
        setActiveField={setFilterField}
        setDirection={setFilterDirection}
      ></TableHeader>
      <tbody>
        {sortedData.map(item => (
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
