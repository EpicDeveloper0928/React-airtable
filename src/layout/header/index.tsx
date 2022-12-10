import React from "react";

import Nav from "components/nav";
import Logo from "components/logo";
import { ExpandIcon } from "components/icons";

export default function Header() {
  return (
    <div className="h-14 bg-sky-500 pl-5 pr-4 flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
        <button className="flex items-center group">
          <h4 className="font-semibold text-xl text-white/90 group-hover:text-white">
            Grid View
          </h4>
          <ExpandIcon className="ml-2 text-white/30 group-hover:text-white" />
        </button>
      </div>

      <div className="flex items-center">
        <Nav />
        <div className="w-7 h-7 border ml-2 border-white bg-pink-500 rounded-full justify-center text-sm items-center flex">
          W
        </div>
      </div>
    </div>
  );
}
