import React, { Fragment } from "react";

import {
  CodeIcon,
  ConditionIcon,
  CopyIcon,
  DropDownIcon,
  FilterIcon,
  GroupIcon,
  InfoIcon,
  LinkIcon,
  MoveForwardIcon,
  MoveNextIcon,
  PencilIcon,
  SortDownIcon,
  SortUpIcon,
  TrashIcon,
} from "components/icons";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";

type DropDownList = {
  name: string;
  label: string;
  icon: React.ReactNode;
  borderTop?: boolean;
  disabled?: boolean;
};

const dropDownList: DropDownList[] = [
  { name: "edit", label: "Edit field", icon: <PencilIcon /> },
  {
    name: "duplicate",
    label: "Duplicate field",
    icon: <CopyIcon />,
    borderTop: true,
  },
  { name: "insert_left", label: "Insert left", icon: <MoveForwardIcon /> },
  { name: "insert_right", label: "Insert right", icon: <MoveNextIcon /> },
  {
    name: "copy_field_url",
    label: "Copy field URL",
    icon: <LinkIcon />,
    borderTop: true,
  },
  {
    name: "edit_field_description",
    label: "Edit field description",
    icon: <InfoIcon />,
  },
  {
    name: "sort_ascending",
    label: "Sort First-Last",
    icon: <SortUpIcon />,
    borderTop: true,
  },
  { name: "sort_descending", label: "Sort Last-First", icon: <SortDownIcon /> },
  {
    name: "filter_by_this_field",
    label: "Filter by this field",
    icon: <FilterIcon />,
    borderTop: true,
  },
  {
    name: "group_by_this_field",
    label: "Group by this field",
    icon: <GroupIcon />,
  },
  {
    name: "show_dependencies",
    label: "Show dependencies",
    icon: <ConditionIcon />,
  },
  {
    name: "hide_field",
    label: "Hide field",
    icon: <CodeIcon />,
    borderTop: true,
  },
  { name: "delete_field", label: "Delete field", icon: <TrashIcon /> },
];

function DropDownHeader() {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <Menu.Button>
        <DropDownIcon />
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
        <Menu.Items className="absolute right-0 w-56 p-3 mt-2 origin-top-right bg-white rounded-md shadow-lg z- ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropDownList.map((item) => (
            <div
              key={item.name}
              className={classNames({ "border-t pt-2 mt-2": item.borderTop })}
            >
              <Menu.Item>
                <button className="flex items-center w-full px-2 py-2 text-sm rounded-md group hover:bg-slate-900/10 text-slate-600">
                  {item.icon}
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
