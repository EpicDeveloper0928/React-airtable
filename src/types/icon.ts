import { iconNames } from "constant/icons";

export type ObjectMap<K extends keyof any, V> = { [P in K]: V };
export type EnumType<T> = keyof T;
export type IconName = EnumType<typeof iconNames>;
