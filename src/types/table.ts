import React from "react";

export type ToolType = {
  name: string;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type HeaderType = {
  name: string;
  label: string;
  minWidth?: string;
  icon?: React.ReactNode;
};
