import { IconName } from "constant/icons";

export type DropDownList = {
  name: string;
  label: string;
  icon: IconName;
  borderTop?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
};
