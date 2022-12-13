import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import Icon from "components/icons/icon";
import { IColumnType } from "types/table";
import { DropDownList } from "types/dropdown";
import { addColumn } from "store/home";
import Input from "components/forms/input";
import classNames from "classnames";
import Button from "components/forms/button";
import AutoComplete from "components/auto-complete";

type Props<T> = {
  currentColumn: IColumnType<T>;
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
      onClick: () => {
        setInsertMode("left");
        setIsOpened(true);
      },
    },
    {
      name: "insert_right",
      label: "Insert right",
      icon: "right",
      onClick: () => {
        setInsertMode("right");
        setIsOpened(true);
      },
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
  const dispatch = useDispatch();
  const { register } = useForm();

  function insertColumn(
    currentColumn: any,
    newSelectedCoulmn: any,
    position: string
  ) {
    dispatch(
      addColumn({
        current: currentColumn,
        new: newSelectedCoulmn,
        position: position,
      })
    );
  }

  const [newSelectedCoulmn, setNewSelectedCoulmn] = useState();
  const [insertMode, setInsertMode] = useState<string>("");
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Menu as="div" className="relative left-0 z-10 inline-block text-left">
      <>
        <Menu.Button onClick={() => setIsOpened(!isOpened)}>
          <Icon
            name="caret"
            className="text-gray-400 cursor-pointer hover:text-gray-800"
          />
        </Menu.Button>
        <Transition
          show={isOpened}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className={classNames(
              "absolute z-50  mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              insertMode !== "" ? "-right-56 p-4" : " -right-4 p-3"
            )}
          >
            {insertMode !== "" ? (
              <>
                <Input
                  register={register("search")}
                  className="w-[400px]"
                  placeholder="Field name (optional)"
                />
                <AutoComplete
                  onSelect={(column: any) => setNewSelectedCoulmn(column)}
                />
                <div className="flex items-center justify-between mt-4">
                  <Button icon="plus" text="Add description" variant="text" />
                  <div className="flex items-center">
                    <Button
                      onClick={() => setInsertMode("")}
                      text="Cancel"
                      variant="outline"
                    />
                    {newSelectedCoulmn && (
                      <button
                        className="px-3 ml-2 font-bold text-[13px] h-8 leading-[22px] text-white bg-blue-500 border-2 border-blue-500 rounded"
                        onClick={() => {
                          insertColumn(
                            currentColumn,
                            newSelectedCoulmn,
                            insertMode
                          );
                          setIsOpened(false);
                        }}
                      >
                        Create field
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              dropDownList.map((item) => (
                <div
                  key={item.name}
                  className={classNames({
                    "border-t pt-2 mt-2 w-56": item.borderTop,
                  })}
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
              ))
            )}
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  );
}

export default DropDownHeader;
