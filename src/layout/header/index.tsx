import React from "react";

import Nav from "components/nav";
import Logo from "components/logo";
import { ExpandIcon } from "components/icons";

export default function Header() {
  return (
    <div className="fixed top-0 z-30 flex items-center justify-between w-full pl-5 pr-4 h-14 bg-sky-500">
      <div className="flex items-center">
        <Logo />
        <button className="flex items-center group">
          <h4 className="text-xl font-semibold text-white/90 group-hover:text-white">
            Grid View
          </h4>
          <ExpandIcon className="ml-2 text-white/30 group-hover:text-white" />
        </button>
      </div>

      <div className="flex items-center">
        <Nav />
        <div className="flex items-center justify-center ml-2 text-sm bg-pink-500 border border-white rounded-full w-7 h-7">
          W
        </div>
      </div>
    </div>
  );
}
