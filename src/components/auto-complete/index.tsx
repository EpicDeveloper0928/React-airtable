import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Icon from "components/icons/icon";
import classNames from "classnames";
import { IColumnType, IData } from "types/table";

type Props = {
  onSelect: (column: any) => void;
};

const headerType: IColumnType<IData>[] = [
  {
    id: 0,
    key: "single_text",
    title: "Single line text",
    icon: "text",
    width: 200,
  },
  { id: 1, key: "long_text", title: "Long text", icon: "richText", width: 200 },
  { id: 2, key: "user", title: "User", icon: "personal", width: 200 },
  { id: 3, key: "attachment", title: "Attachment", icon: "file", width: 200 },
  {
    id: 4,
    key: "checkbox",
    title: "Checkbox",
    icon: "checkbox",
    width: 200,
  },
];

function AutoComplete({ onSelect }: Props) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  const filteredPeople =
    query === ""
      ? headerType
      : headerType.filter((item) =>
          item.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative w-full cursor-default mt-2 bg-sky-100 p-0.5 overflow-hidden rounded-lg text-left focus:outline-none ">
        <Combobox.Input
          className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none rounded-lg bg-sky-100 focus:outline-none"
          placeholder="Find a field type"
          displayValue={(person: { title: string }) => person?.title}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <Icon
            name="chevronDown"
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button> */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options
            unmount={false}
            className="w-full py-1 overflow-auto text-base bg-white rounded-md h-60 focus:outline-none sm:text-sm"
          >
            {filteredPeople.length === 0 ? (
              <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    classNames(
                      "relative cursor-default select-none p-2 rounded-md mx-1",
                      { "bg-sky-200": active }
                    )
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <div className="flex text-gray-600">
                      {person.icon && <Icon name={person.icon} />}
                      <span className="ml-1">{person.title}</span>
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

export default AutoComplete;
