import React, { ReactElement } from "react";
import { Table } from "react-bootstrap";
import { ControlOptions } from "../models/types.model";
import { TableHeader } from "./TableHeader";
import { PaginationSort } from "../models/pagination.model";
import { ControlButton } from "./ControlButton";
import { omit } from "lodash";

interface Props<V> {
  data: (V & { options?: ControlOptions<V> })[];
  fields: Extract<keyof V, string>[];
  recordAction?: Function;
  responsive?: boolean;
  variant?: "dark" | "light";
  cssClasses?: string[];
  setSort: (sort: PaginationSort | null) => void;
  sort: PaginationSort | null;
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

  type fieldT = keyof typeof data[number];

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
            {fields.map((field : fieldT, index) => {
              return field === "options" ? (
                <td key={index} className={'d-flex justify-content-center'}>
                  <ControlButton options={item.options} target={omit(item, 'options')} />
                </td>
              ) : (
                <td key={index}>{item[field]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
