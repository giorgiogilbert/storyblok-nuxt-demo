import type {Block} from "./Block";
export type Quote = Block & {
    quote: string;
    author: string;
}
