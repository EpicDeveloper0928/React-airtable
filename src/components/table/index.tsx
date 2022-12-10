import React from "react";

import TableBody from "./table-body";
import TableHeader from "./table-header";

export default function Example() {
  return (
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 text-gray-900">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="relative overflow-auto shadow ring-1 ring-black ring-opacity-5">
          <TableHeader />
          <TableBody />
        </div>
      </div>
    </div>
  );
}
