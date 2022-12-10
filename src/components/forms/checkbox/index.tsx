import React from "react";

function CheckBox() {
  return (
    <input
      id="comments"
      aria-describedby="comments-description"
      name="comments"
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300"
    />
  );
}

export default CheckBox;
