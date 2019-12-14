import React from "react";

interface Props<V> {
  data: V[];
}

export const TableFilter: <T extends { _id: number | string }>(
  p: Props<T>
) => React.ReactElement = ({ data }) => {
  return <h1>Table filter</h1>;
};
