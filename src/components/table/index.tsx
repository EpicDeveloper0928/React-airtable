import React from "react";

import LeftPane from "./left-pane";
import RightPane from "./right-pane";
import Toolbar from "components/toolbar";
import { IColumnType, IData } from "types/table";

type Props = {
  dynamicColumns?: IColumnType<IData>[];
};

const fixedColumns: IColumnType<IData>[] = [
  {
    id: 0,
    key: "name",
    title: "Name",
    icon: "text",
    width: 200,
  },
];

const dynamicData: IData[] = [
  {
    description: "Francisco Mendes",
    photo: "Full Stack",
    like: "ebv",
    option: "ebv",
    gender: "ebv",
  },
];

const fixedData: IData[] = [{ name: "name" }];

export default function Example({ dynamicColumns }: Props) {
  return (
    <div className="flex flex-col h-full">
      <Toolbar />
      <div className="relative flex h-full text-slate-800">
        <LeftPane data={fixedData} columns={fixedColumns} />
        <div className="flex-1 overflow-x-auto">
          <RightPane data={dynamicData} columns={dynamicColumns} />
        </div>
      </div>
    </div>
  );
}
