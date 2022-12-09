import React from "react";
import classNames from "classnames";
import Table from "../../components/table";

const tabs = [
  { name: "People", href: "#", icon: "UserIcon", current: true },
  { name: "Company", href: "#", icon: "BuildingOfficeIcon", current: false },
  { name: "Team Members", href: "#", icon: "UsersIcon", current: false },
  { name: "Billing", href: "#", icon: "CreditCardIcon", current: false },
];

const tools = [
  { name: "Views", href: "#", leftIcon: "V", current: true },
  { name: "Grid View", href: "#", leftIcon: "", current: false },
  {
    name: "Team Members",
    href: "#",
    leftIcon: "T",
    current: false,
  },
  { name: "Billing", href: "#", leftIcon: "CreditCardIcon", current: false },
];

export default function Home() {
  return (
    <div className="bg-sky-600 h-8 text-white">
      <nav className="-mb-px flex h-full items-center pl-3" aria-label="Tabs">
        {tabs.map((tab) => (
          <>
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                "h-full font-medium text-sm flex items-center",
                tab.current
                  ? "bg-white text-slate-900 rounded-t-sm pl-3 pr-8"
                  : "rounded-b-sm px-3"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          </>
        ))}
      </nav>

      <nav
        className="flex space-x-4 items-center h-11 border-b pl-3"
        aria-label="Tabs"
      >
        {tools.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              "font-medium text-sm rounded-sm hover:bg-gray-100 px-2 border-y-2 border-transparent",
              tab.current
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700"
            )}
            aria-current={tab.current ? "page" : undefined}
          >
            <span className="mr-1">{tab.leftIcon}</span>
            <span>{tab.name}</span>
          </a>
        ))}
      </nav>

      <Table />
    </div>
  );
}
