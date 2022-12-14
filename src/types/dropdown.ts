import { IconName } from "./icon";

export type DropDownList = {
  name: string;
  label: string;
  icon: IconName;
  borderTop?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
};
