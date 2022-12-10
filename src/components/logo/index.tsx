import React from "react";
import classNames from "classnames";

import { BackIcon, RocketIcon } from "components/icons";
import Button from "components/forms/button";

type Props = { className?: string };

function Logo({ className }: Props) {
  return (
    <div className={classNames("relative flex items-center", className)}>
      <Button
        variant="solid"
        icon={<BackIcon />}
        className="ml-0 opacity-0 z-10 hover:opacity-100"
      />
      <div className="absolute z-0 flex items-center">
        <RocketIcon className="w-6 h-6 " />
      </div>
    </div>
  );
}

export default Logo;
