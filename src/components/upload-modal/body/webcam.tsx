import Icon from "components/icons/icon";
import React from "react";

function Webcam() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-gray-600">
      <Icon name="camera" className="mx-auto w-14 h-14" />
      <h4 className="text-xl font-medium">Webcam disabled</h4>
      <p className="text-sm text-gray-400">
        Please enable your webcam to take a photo.
      </p>
    </div>
  );
}

export default Webcam;
