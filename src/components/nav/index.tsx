import React from "react";

import Button, { ButtonType } from "components/forms/button";

const navList: ButtonType[] = [
  { icon: "history", variant: "text" },
  { icon: "help", text: "help", variant: "text" },
  { icon: "personal", text: "Share" },
  { icon: "bell" },
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
