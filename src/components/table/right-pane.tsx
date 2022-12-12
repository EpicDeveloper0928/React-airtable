import React from "react";

import TableBody from "./table-body/table-body";
import TableHeader from "./table-header";
import TableFooter from "./table-footer";
import { IColumnType } from ".";

interface Props<T> {
  data: T[];
  type?: "fixed" | "movable";
  columns: IColumnType<T>[];
}

function RightPane<T>({ data, columns, type }: Props<T>) {
  return (
    <div className="z-0 flex flex-col justify-between h-full border-r">
      <TableHeader columns={columns} type={type} />
      <TableBody data={data} columns={columns} />
      <TableFooter />
    </div>
  );
}

export default RightPane;
