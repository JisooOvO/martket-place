import { atom } from "recoil";

export const AtomInnerWidth = atom({
  key: "innerWidth",
  default: window.innerWidth,
});
