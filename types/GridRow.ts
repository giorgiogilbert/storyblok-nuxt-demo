import type { GridColumn } from "~/types/GridColumn";
import type { Block } from "~/types/Block";
export type GridRow = Block & {
  columns: GridColumn[];
};
