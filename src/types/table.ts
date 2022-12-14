import React from "react";

import { IconName } from "./icon";

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

export interface IColumnType<T> {
  id: number;
  key: string;
  title: string;
  width?: number;
  icon?: IconName;
  render?: (column: IColumnType<T>, item: T) => void;
}

export type IData = {
  [key in string]: any;
};
