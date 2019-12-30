import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import { SelectionDropdown } from "./forms/SelectionDropdown";

interface Props {
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  limit: number;
  page?: number;
  offset?: number;
  pages?: number;
  size?: "sm" | "lg";
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export const Paginator: FC<Props> = ({
  limit,
  page,
  pages,
  setLimit,
  setPage,
  size,
  hasNextPage,
  hasPrevPage
}) => {
  console.log({
    limit,
    page,
    pages,
    setLimit,
    setPage,
    size,
    hasNextPage,
    hasPrevPage
  });
  if (!pages || !page) return <h1>no pages</h1>;
  const fill: string[] = new Array(pages).fill("1");
  const paginationStep = ["15", "30", "50"];
  const extended = pages > 5;

  const handleLimit = (value: string) => {
    setLimit(+value);
  };

  const handleExtended = (value: "first" | "prev" | "next" | "last") => {
    switch (value) {
      case "first":
        return setPage(1);
      case "last":
        return setPage(pages);
      case "next":
        return setPage(page + 1);
      case "prev":
        return setPage(page - 1);
      default:
        return null;
    }
  };

  return (
    <div className="paginator-container">
      <Pagination size={size || "sm"}>
        {extended && (
          <>
            <Pagination.First onClick={handleExtended.bind(null, "first")} />
            <Pagination.Prev
              onClick={handleExtended.bind(null, "prev")}
              disabled={!hasPrevPage}
            />
          </>
        )}
        {fill.map((item, index) => (
          <Pagination.Item
            active={index + 1 === page}
            onClick={setPage.bind(null, index + 1)}
            key={index + 1}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        {extended && (
          <>
            <Pagination.Next
              onClick={handleExtended.bind(null, "next")}
              disabled={!hasNextPage}
            />
            <Pagination.Last onClick={handleExtended.bind(null, "last")} />
          </>
        )}
      </Pagination>
      <div className="paginator-container__limit-selector">
        <SelectionDropdown
          events={paginationStep}
          selected={`${limit}`}
          title={`Items per page: ${limit}`}
          setValue={handleLimit}
          size={size}
        ></SelectionDropdown>
      </div>
    </div>
  );
};
