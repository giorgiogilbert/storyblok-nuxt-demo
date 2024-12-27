import type { Block } from "./Block";
import type {NuxtError} from "#app";
export type Story = {
  story: {
      content: {
          content: Block[]
      };
      component: string;
      id: string;
      name: string;
      uid: string;
  }
};
export type StoryData = {
    data: Ref<Story|null>
    error: Ref<NuxtError<unknown>>
    pending: Ref<boolean>
}
