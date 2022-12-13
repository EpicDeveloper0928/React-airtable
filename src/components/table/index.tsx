import React from "react";

import LeftPane from "./left-pane";
import RightPane from "./right-pane";
import Toolbar from "components/toolbar";
import { IconName } from "constant/icons";

export interface IColumnType<T> {
  key: string;
  title: React.ReactNode;
  width?: number;
  icon?: IconName;
  render?: (column: IColumnType<T>, item: T) => void;
}

type IData = {
  [key in string]: string;
};

const fixedColumns: IColumnType<IData>[] = [
  {
    key: "name",
    title: "Name",
    icon: "text",
    width: 200,
  },
];

const dynamicColumns: IColumnType<IData>[] = [
  {
    key: "description",
    title: "Description",
    icon: "paragraph",
    width: 160,
  },
  { key: "photo", title: "Photo", icon: "view", width: 160 },
  { key: "like", title: "Like", icon: "checkboxChecked", width: 160 },
  { key: "option", title: "Option", icon: "grid", width: 160 },
  { key: "gender", title: "Gender", icon: "personalCloseup", width: 160 },
  // { key: "phone", title: "Phone", icon: "P" },
  // { key: "email", title: "Email Address", icon: "E" },
  // { key: "birthday", title: "Birthday", icon: "B" },
  // { key: "agent", title: "Agent", icon: "A" },
  // { key: "balance", title: "Balance", icon: "B" },
  // { key: "rating", title: "Rating", icon: "R" },
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

// export const TABLE_HEADER: HeaderType[] = [
//   { name: "name", label: "Name", icon: <FontIcon /> },
// ];

export default function Example() {
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
