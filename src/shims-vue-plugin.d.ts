import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $np: {
      start: () => void;
      done: (force?: boolean) => void;
      remove: () => void;
      set: (rate: number) => void;
      inc: (rate: number) => void;
    };
  }
}
