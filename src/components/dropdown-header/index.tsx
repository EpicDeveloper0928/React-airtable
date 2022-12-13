import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { insertColumn } from "helpers/header-dropdown";
import { IColumnType } from "components/table";
import Icon from "components/icons/icon";
import { IconName } from "constant/icons";

type Props<T> = {
  currentColumn: IColumnType<T>;
};

type DropDownList = {
  name: string;
  label: string;
  icon: IconName;
  borderTop?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
};

function DropDownHeader<T>({ currentColumn }: Props<T>) {
  const dropDownList: DropDownList[] = [
    { name: "edit", label: "Edit field", icon: "edit" },
    {
      name: "duplicate",
      label: "Duplicate field",
      icon: "duplicate",
      borderTop: true,
    },
    {
      name: "insert_left",
      label: "Insert left",
      icon: "left",
      onClick: () => insertColumn(currentColumn, "left"),
    },
    {
      name: "insert_right",
      label: "Insert right",
      icon: "right",
      onClick: () => insertColumn(currentColumn, "right"),
    },
    {
      name: "copy_field_url",
      label: "Copy field URL",
      icon: "hyperlink",
      borderTop: true,
    },
    {
      name: "edit_field_description",
      label: "Edit field description",
      icon: "info",
    },
    {
      name: "sort_ascending",
      label: "Sort First-Last",
      icon: "ascending",
      borderTop: true,
    },
    {
      name: "sort_descending",
      label: "Sort Last-First",
      icon: "descending",
    },
    {
      name: "filter_by_this_field",
      label: "Filter by this field",
      icon: "filter",
      borderTop: true,
    },
    {
      name: "group_by_this_field",
      label: "Group by this field",
      icon: "group",
    },
    {
      name: "show_dependencies",
      label: "Show dependencies",
      icon: "settings",
    },
    {
      name: "hide_field",
      label: "Hide field",
      icon: "hide1",
      borderTop: true,
    },
    { name: "delete_field", label: "Delete field", icon: "trash" },
  ];

  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <Menu.Button>
        <Icon name="caret" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-50 w-56 p-3 mt-2 origin-top-right bg-white rounded-md shadow-lg -right-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropDownList.map((item) => (
            <div
              key={item.name}
              className={classNames({ "border-t pt-2 mt-2": item.borderTop })}
            >
              <Menu.Item>
                <button
                  className="flex items-center w-full px-2 py-2 text-sm rounded-md group hover:bg-slate-900/10 text-slate-600"
                  onClick={item.onClick}
                >
                  <Icon name={item.icon} />
                  <span className="ml-4">{item.label}</span>
                </button>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDownHeader;
