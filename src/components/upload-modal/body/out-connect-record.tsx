import React from "react";

import Icon from "components/icons/icon";
import { ReactComponent as GoogleIcon } from "assets/icons/micro-svgs/google.svg";
import { UploadType } from "..";

type Props = {
  type?: UploadType;
};

function OutConnect({ type }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-gray-600">
      {type && <Icon name={type?.icon} className="mx-auto w-14 h-14" />}
      <h4 className="text-xl font-medium">Select Files from {type?.label}</h4>
      <p className="text-sm text-gray-400">
        You need to authenticate with {type?.label}.<br />
        We only extract images and never modify or delete them.
      </p>
      {type?.label === "Google Drive" ? (
        <button className="flex items-center h-10 px-2 border rounded">
          <GoogleIcon className="w-5 h-5 mr-4" />
          Sign in with Google
        </button>
      ) : (
        <button className="h-auto px-4 py-2 text-white bg-blue-500 border rounded text-[13px] font-medium">
          Connect {type?.label}
        </button>
      )}
      <p className="text-sm text-gray-400">
        A new page will open to connect your account.
        <br />
        To disconnect from {type?.label} click &quot;Sign out&quot; button in
        the menu.
      </p>
    </div>
  );
}

export default OutConnect;
