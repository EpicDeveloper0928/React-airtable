import classNames from "classnames";
import React from "react";

export type ButtonType = {
  icon?: React.ReactNode;
  text?: string;
  variant?: "text" | "solid" | "outline";
  className?: string;
};

function Button({ icon, text, variant = "solid", className }: ButtonType) {
  return (
    <button
      className={classNames(
        className,
        "h-7 mx-2 rounded-full items-center flex justify-center text-sm",
        {
          "bg-white text-sky-500 shadow ": variant === "solid",
          "hover:bg-black/10": variant === "text",
          "px-3": !!text,
          "w-7 ": !text && !!icon,
        }
      )}
    >
      {icon}
      {text ? <span className="ml-1">{text}</span> : null}
    </button>
  );
}

export default Button;
