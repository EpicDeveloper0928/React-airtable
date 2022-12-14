import React from "react";
import classNames from "classnames";

import { UploadType } from ".";
import Icon from "components/icons/icon";

type Props = {
  uploadList: UploadType[];
  selectedKey: string;
  onSelect: (key: string) => void;
};

function UploadSidebar({ uploadList, selectedKey, onSelect }: Props) {
  return (
    <ul className="w-[3.75rem] absolute z-10 bg-zinc-100 h-full transition hover:w-60 group text-zinc-500">
      {uploadList.map((item) => (
        <li
          key={item.key}
          className={classNames(
            "h-[50px] flex items-center cursor-pointer hover:bg-gray-500/10",
            { "text-blue-500 shadow-3xl": selectedKey === item.key }
          )}
          onClick={() => onSelect(item.key)}
        >
          <Icon name={item.icon} className="w-5 h-5 mx-5" />
          <span className="hidden text-sm group-hover:block hover:text-blue-500 text-zinc-700">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UploadSidebar;
