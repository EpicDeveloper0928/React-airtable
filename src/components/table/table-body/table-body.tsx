import React from "react";
import { IColumnType } from "..";

import TableRowCell from "./table-row-cell";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

function TableBody<T>({ data, columns }: Props<T>) {
  return (
    <div className="flex-1">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={`table-body-${index}`} className="flex border-b">
            {columns.map((column, columnIndex) => (
              <TableRowCell
                key={`table-row-cell-${columnIndex}`}
                item={item}
                column={column}
              />
            ))}
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

export default TableBody;
