import { atom } from "recoil";
import { v1 } from "uuid";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const basketState = atom({
  key: "basketState",
  default: [],
});
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: "/",
});
