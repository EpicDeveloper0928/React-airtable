import React from "react";

import Nav from "../../components/nav";
import Logo from "../../components/logo";

export default function Header() {
  return (
    <div className="h-14 bg-sky-500 pl-5 pr-4 flex items-center justify-between">
      <div className="flex items-center">
        <Logo className="mr-3" />
        <h4 className="font-semibold text-xl">Grid View</h4>
      </div>
      <div className="flex items-center">
        <Nav />
        <div className="w-7 h-7 border border-white bg-pink-500 rounded-full justify-center text-sm items-center flex">
          W
        </div>
      </div>
    </div>
  );
}
