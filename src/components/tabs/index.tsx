import React from "react";

import { tabs } from "constant/table";
import classNames from "classnames";
import { ExpandIcon } from "components/icons";

function Tabs() {
  return (
    <nav
      className="flex items-center w-full h-8 pl-3 -mb-px bg-sky-600"
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className={classNames(
            "h-full font-medium text-sm flex items-center justify-between group",
            tab.current
              ? "bg-white text-slate-900 rounded-t-sm px-3"
              : "rounded-b-sm px-3"
          )}
          aria-current={tab.current ? "page" : undefined}
        >
          {tab.name}
          <ExpandIcon className="w-3 h-3 ml-2 text-gray-400 group-hover:text-gray-800" />
        </a>
      ))}
    </nav>
  );
}

export default Tabs;
