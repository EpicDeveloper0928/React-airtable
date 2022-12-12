import React from "react";

import CheckBox from "components/forms/checkbox";
import DropDownHeader from "components/dropdown-header";
import { IColumnType } from ".";
interface Props<T> {
  type?: "fixed" | "movable";
  columns: IColumnType<T>[];
}

function TableHeader<T>({ columns, type }: Props<T>) {
  return (
    <div className="flex h-8 bg-gray-100 border-b">
      {columns.map((column, index) => (
        <div
          key={`key-${index}`}
          style={{ width: column.width ? column.width : "100%" }}
          className="flex items-center justify-between text-sm text-left border-r"
        >
          <div className="flex items-center">
            {column.icon ? (
              <span className="px-1 text-gray-400">{column.icon}</span>
            ) : null}
            {column.title}
          </div>
          <span className="px-1 py-2 leading-4 text-gray-400 cursor-pointer hover:text-gray-800">
            <DropDownHeader currentColumn={column} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
