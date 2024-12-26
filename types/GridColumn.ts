import type {Block} from "./Block";

export type GridColumn = Block & {
    content: Block[];
}
