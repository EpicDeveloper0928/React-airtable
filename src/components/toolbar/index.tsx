import React, { useState } from "react";
import classNames from "classnames";

import { ToolType } from "types/table";
import Icon from "components/icons/icon";

const TOOLS: ToolType[] = [
  { name: "view", label: "Views", leftIcon: "menu" },
  {
    name: "grid_view",
    label: "Grid view",
    leftIcon: "grid",
    rightIcon: "team",
  },
  {
    name: "hide_fields",
    label: "Hide fields",
    leftIcon: "hide1",
  },
  { name: "filter", label: "Filter", leftIcon: "filter" },
  { name: "group", label: "Group", leftIcon: "group" },
  { name: "sort", label: "Sort", leftIcon: "sort" },
  { name: "color", label: "Color", leftIcon: "paint" },
  { name: "row_height", label: "", leftIcon: "rowHeightSmall" },
  { name: "share_view", label: "Share view", leftIcon: "share1" },
];

function Toolbar() {
  const [selectedTool, setSelectedTool] = useState<ToolType>();

  return (
    <div className="flex justify-between border-b">
      <ul className="flex items-center h-11" aria-label="Tabs">
        {TOOLS.map((tab) => (
          <li
            key={tab.name}
            className={classNames(
              "font-medium text-sm rounded-sm hover:bg-gray-100 px-2 border-y-2 border-transparent flex items-center",
              selectedTool?.name === tab.name
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setSelectedTool(tab)}
          >
            {tab.leftIcon ? (
              <span className="mr-1">
                <Icon name={tab.leftIcon} />
              </span>
            ) : null}
            <span>{tab.label}</span>
            {tab.rightIcon ? (
              <span className="ml-1">
                <Icon name={tab.rightIcon} />
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <button className="pr-4 text-slate-500 hover:text-slate-700">
        <Icon name="search" />
      </button>
    </div>
  );
}

export default Toolbar;
