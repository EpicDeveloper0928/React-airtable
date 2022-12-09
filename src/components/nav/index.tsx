import React from "react";
import Button, { ButtonType } from "../forms/button";

const navList: ButtonType[] = [
  { icon: "history", variant: "text" },
  { icon: "H", text: "help", variant: "text" },
  { icon: "S", text: "Share" },
  { icon: "B" },
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
