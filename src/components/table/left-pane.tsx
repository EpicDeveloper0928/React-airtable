import React from "react";
import { IColumnType } from ".";

import TableBody from "./table-body/table-body";
import TableFooter from "./table-footer";
import TableHeader from "./table-header";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

function LeftPane<T>({ data, columns }: Props<T>) {
  return (
    <div className="top-0 left-0 z-10 flex flex-col justify-between h-full border-r">
      <TableHeader columns={columns} type="fixed" />
      <TableBody data={data} columns={columns} />
      <TableFooter />
    </div>
  );
}

export default LeftPane;
