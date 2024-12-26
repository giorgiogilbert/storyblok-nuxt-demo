import type { Block } from "./Block";
export type Image = Block & {
  image: {
    filename: string;
    alt: string;
    title: string;
    copyright: string;
  };
};
