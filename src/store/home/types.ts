import { IColumnType, IData } from "types/table";

export interface MainState {
  status: number;
  data: IColumnType<IData>[] | undefined;
}
