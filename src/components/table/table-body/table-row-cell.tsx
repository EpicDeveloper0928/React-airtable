import React from "react";
import get from "lodash.get";
import { IColumnType } from "..";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

function TableRowCell<T>({ item, column }: Props<T>) {
  const value = get(item, column.key);
  return (
    <div
      className="flex items-center h-8 px-2 border-r"
      style={{ width: column.width }}
    >
      {column.render ? column.render(column, item) : value}
    </div>
  );
}

export default TableRowCell;
