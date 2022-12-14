import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import UploadSidebar from "./sidebar";
import UploadBody from "./body/body";
import { IconName } from "types/icon";

type Props = {
  isOpen: boolean;
  closeModal: VoidFunction;
  children?: React.ReactNode;
};

export type UploadType = {
  label: string;
  key: string;
  icon: IconName;
  icon1: string;
};

const uploadList: UploadType[] = [
  {
    key: "device",
    label: "My Device",
    icon: "attachment",
    icon1: "local_file_system",
  },
  { key: "link", label: "Link (URL)", icon: "hyperlink", icon1: "source-url" },
  { key: "web", label: "Web Search", icon: "search", icon1: "image-search" },
  { key: "photo", label: "Take Photo", icon: "camera", icon1: "webcam" },
  {
    key: "drive",
    label: "Google Drive",
    icon: "drive",
    icon1: "googledrive",
  },
  { key: "dropbox", label: "Dropbox", icon: "dropbox", icon1: "dropbox" },
  { key: "facebook", label: "Facebook", icon: "facebook", icon1: "facebook" },
  { key: "box", label: "Box", icon: "box", icon1: "box" },
  { key: "one_drive", label: "OneDrive", icon: "oneDrive", icon1: "onedrive" },
  {
    key: "one_drive_business",
    label: "OneDrive Business",
    icon: "oneDrive",
    icon1: "onedrive",
  },
];

function UploadModal({ isOpen, closeModal }: Props) {
  const [selectedKey, setSelectedKey] = useState("device");

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[750px] h-[500px] overflow-hidden text-left transition-all transform bg-white rounded shadow-xl">
                  <UploadSidebar
                    uploadList={uploadList}
                    onSelect={(key: string) => setSelectedKey(key)}
                    selectedKey={selectedKey}
                  />
                  <UploadBody
                    uploadList={uploadList}
                    selectedKey={selectedKey}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default UploadModal;
