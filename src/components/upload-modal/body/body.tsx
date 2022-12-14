import React from "react";

import Icon from "components/icons/icon";
import { UploadType } from "..";
import OutConnect from "./out-connect-record";
import Dropbox from "./dropbox";
import ActionForm from "./action-form";
import Webcam from "./webcam";

type Props = { uploadList: UploadType[]; selectedKey: string };

function UploadBody({ uploadList, selectedKey }: Props) {
  const selectedType = uploadList.find((item) => item.key === selectedKey);

  const Body = () => {
    if (selectedKey === "device") return <Dropbox />;
    if (selectedKey === "link" || selectedKey === "web")
      return <ActionForm type={selectedType} />;
    if (selectedKey === "photo") return <Webcam />;
    return <OutConnect key={selectedKey} type={selectedType} />;
  };

  return (
    <div className="pl-[60px] h-full flex flex-col">
      <header className="h-[50px] flex items-center justify-center relative text-slate-600">
        <span className="w-5 h-5 bg-center bg-no-repeat">
          {selectedType && <Icon name={selectedType?.icon} />}
        </span>
        <button className="absolute right-0 p-2 mr-2 text-gray-500 hover:text-gray-400">
          <Icon name="x" />
        </button>
      </header>
      <div className="flex items-center justify-center flex-1 px-4 pb-4">
        <Body />
      </div>
    </div>
  );
}

export default UploadBody;
