import React from "react";

import TableBody from "./table-body/table-body";
import TableHeader from "./table-header";
import TableFooter from "./table-footer";
import { IColumnType } from "types/table";

interface Props<T> {
  data: T[];
  columns?: IColumnType<T>[];
}

function RightPane<T>({ data, columns }: Props<T>) {
  return (
    <div className="z-0 flex flex-col justify-between h-full border-r">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
      <TableFooter />
    </div>
  );
}

export default RightPane;
