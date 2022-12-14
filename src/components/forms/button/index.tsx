import React from "react";
import classNames from "classnames";

import Icon from "components/icons/icon";
import { IconName } from "types/icon";

export type ButtonType = {
  icon?: IconName;
  text?: string;
  variant?: "text" | "solid" | "outline";
  className?: string;
};

function Button({
  icon,
  text,
  variant = "solid",
  className,
  ...rest
}: ButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) {
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
      {...rest}
    >
      {icon ? <Icon name={icon} /> : null}
      {text ? <span className="ml-1">{text}</span> : null}
    </button>
  );
}

export default Button;
