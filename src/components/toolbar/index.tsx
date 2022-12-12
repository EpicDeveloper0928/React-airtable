import React, { useState } from "react";
import classNames from "classnames";

import { ToolType } from "types/table";
import {
  CodeIcon,
  ColorFillIcon,
  ExpandShortIcon,
  FilterIcon,
  GridViewIcon,
  GroupIcon,
  SearchIcon,
  ShareIcon,
  SortIcon,
  UsersIcon,
  ViewsIcon,
} from "components/icons";

const TOOLS: ToolType[] = [
  { name: "view", label: "Views", leftIcon: <ViewsIcon /> },
  {
    name: "grid_view",
    label: "Grid view",
    leftIcon: <GridViewIcon />,
    rightIcon: <UsersIcon />,
  },
  {
    name: "hide_fields",
    label: "Hide fields",
    leftIcon: <CodeIcon />,
  },
  { name: "filter", label: "Filter", leftIcon: <FilterIcon /> },
  { name: "group", label: "Group", leftIcon: <GroupIcon /> },
  { name: "sort", label: "Sort", leftIcon: <SortIcon /> },
  { name: "color", label: "Color", leftIcon: <ColorFillIcon /> },
  { name: "row_height", label: "", leftIcon: <ExpandShortIcon /> },
  { name: "share_view", label: "Share view", leftIcon: <ShareIcon /> },
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
            {tab.leftIcon ? <span className="mr-1">{tab.leftIcon}</span> : null}
            <span>{tab.label}</span>
            {tab.rightIcon ? (
              <span className="ml-1">{tab.rightIcon}</span>
            ) : null}
          </li>
        ))}
      </ul>
      <button className="pr-4 text-slate-500 hover:text-slate-700">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Toolbar;
