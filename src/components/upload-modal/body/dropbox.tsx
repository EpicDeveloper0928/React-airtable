import Icon from "components/icons/icon";
import React from "react";

function Dropbox() {
  return (
    <label className="flex justify-center w-full h-full px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer group hover:border-gray-400 focus:outline-none">
      <span className="flex flex-col items-center justify-center space-x-2">
        <Icon
          name="file"
          className="w-20 h-20 text-gray-400 group-hover:text-blue-500"
        />
        <span className="text-xl font-medium text-gray-700">
          Select Files to Upload
        </span>
        <span className="text-sm text-gray-400">
          or drag and drop, copy and paste files
        </span>
      </span>
      <input type="file" name="file_upload" className="hidden" />
    </label>
  );
}

export default Dropbox;
