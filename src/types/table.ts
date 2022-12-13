import { IconName } from "constant/icons";
import React from "react";

export type ToolType = {
  name: string;
  label: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
};

export type HeaderType = {
  name: string;
  label: string;
  minWidth?: string;
  icon?: IconName;
};
