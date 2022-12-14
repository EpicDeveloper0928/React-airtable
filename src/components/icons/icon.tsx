import React from "react";

import { iconPaths } from "constant/icons";
import { IconName } from "types/icon";

interface Props {
  name: IconName;
}

export default function Icon({
  name,
  ...rest
}: Props & React.SVGProps<SVGSVGElement>) {
  const pathData = iconPaths[name];
  return (
    <svg
      viewBox="0 0 16 16"
      width={16}
      height={16}
      style={{
        shapeRendering: "geometricPrecision",
      }}
      {...rest}
    >
      <path fillRule="evenodd" fill="currentColor" d={pathData} />
    </svg>
  );
}
