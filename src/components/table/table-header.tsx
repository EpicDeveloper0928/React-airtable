import React from "react";
import classNames from "classnames";

import { HeaderType } from "types/table";
import CheckBox from "components/forms/checkbox";
import {
  CheckboxIcon,
  DocumentIcon,
  ListIcon,
  ViewsIcon,
} from "components/icons";
import DropDownHeader from "components/dropdown-header";

export const TABLE_HEADER: HeaderType[] = [
  { name: "description", label: "Description", icon: <ViewsIcon /> },
  { name: "photo", label: "Photo", icon: <DocumentIcon /> },
  { name: "like", label: "Like", icon: <CheckboxIcon /> },
  { name: "option", label: "Option", icon: <ListIcon /> },
  { name: "gender", label: "Gender", icon: "G" },
  { name: "phone", label: "Phone", icon: "P" },
  { name: "email", label: "Email Address", icon: "E" },
  { name: "birthday", label: "Birthday", icon: "B" },
  { name: "agent", label: "Agent", icon: "A" },
  { name: "balance", label: "Balance", icon: "B" },
  { name: "rating", label: "Rating", icon: "R" },
];

function TableHeader() {
  return (
    <ul className="bg-gray-100 flex relative border-b">
      <li className="flex m-2 border-r sticky">
        <CheckBox />
      </li>
      {TABLE_HEADER.map((item, index) => (
        <li
          key={`key-${index}`}
          className={classNames(
            "min-w-[12rem] flex justify-between border-r text-left text-sm items-center",
            { sticky: index === 0 }
          )}
        >
          <div className="flex items-center">
            {item.icon ? (
              <span className="px-1 text-gray-400">{item.icon}</span>
            ) : null}
            {item.label}
          </div>
          <span className="px-1 py-2 leading-4 text-gray-400 hover:text-gray-800 cursor-pointer">
            <DropDownHeader />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TableHeader;
