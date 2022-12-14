import React, { useState } from "react";

import Icon from "components/icons/icon";
import UploadModal from "components/upload-modal";

function AttachField() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between w-full h-full p-1 border-2 border-blue-500">
        <button
          className="p-1 mr-0.5 bg-gray-800/10 hover:bg-gray-800/20"
          onClick={() => setIsOpen(true)}
        >
          <Icon name="plus" width={12} height={12} />
        </button>
        <div className="flex items-center flex-1 text-xs text-slate-600">
          <Icon name="download" width={12} height={12} />
          <span className="ml-1">Drop file here</span>
        </div>
        <button>
          <Icon
            name="expand1"
            width={12}
            height={12}
            className="text-blue-600"
          />
        </button>
      </div>
      <UploadModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}

export default AttachField;
