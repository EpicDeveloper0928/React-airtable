import React from "react";

import Icon from "components/icons/icon";
import { UploadType } from "..";

function ActionForm({ type }: { type?: UploadType }) {
  return (
    <form className="relative w-3/5">
      <input
        type="text"
        className="border h-[46px] text-[13px] pl-[10px] pr-12 outline-none rounded-l w-full focus:shadow-lg text-slate-700"
        placeholder={type?.key === "link" ? "Enter a URL" : "Search images..."}
      />
      <button
        type="submit"
        className="absolute bg-blue-500 text-white h-[46px] px-[14px] -right-0.5 rounded-r"
      >
        {type && <Icon name={type?.icon} />}
      </button>
    </form>
  );
}

export default ActionForm;
