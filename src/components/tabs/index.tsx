import React from "react";

import { tabs } from "constant/table";
import classNames from "classnames";
import { ExpandIcon } from "components/icons";

function Tabs() {
  return (
    <nav className="-mb-px flex h-full items-center pl-3" aria-label="Tabs">
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
          <ExpandIcon className="ml-2 w-3 h-3 group-hover:text-gray-800 text-gray-400" />
        </a>
      ))}
    </nav>
  );
}

export default Tabs;
