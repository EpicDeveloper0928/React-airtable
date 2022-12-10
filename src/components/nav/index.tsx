import React from "react";

import Button, { ButtonType } from "components/forms/button";
import { BellIcon, FaqIcon, HistoryIcon, UserIcon } from "components/icons";

const navList: ButtonType[] = [
  { icon: <HistoryIcon />, variant: "text" },
  { icon: <FaqIcon />, text: "help", variant: "text" },
  { icon: <UserIcon />, text: "Share" },
  { icon: <BellIcon /> },
];

function Nav() {
  return (
    <ul className="flex items-center ">
      {navList.map((item, index) => (
        <li key={`key-${index}`}>
          <Button icon={item.icon} text={item.text} variant={item.variant} />
        </li>
      ))}
    </ul>
  );
}

export default Nav;
