import classNames from "classnames";
import React from "react";

export type ButtonType = {
  icon?: React.ReactNode;
  text?: string;
  variant?: "text" | "solid" | "outline";
};

function Button({ icon, text, variant = "solid" }: ButtonType) {
  return (
    <button
      className={classNames("h-7 mx-2 px-3 rounded-full", {
        "bg-white text-sky-500 shadow": variant === "solid",
        "hover:bg-black/10": variant === "text",
      })}
    >
      {icon}
      {text ? <span className="ml-1">{text}</span> : null}
    </button>
  );
}

export default Button;
