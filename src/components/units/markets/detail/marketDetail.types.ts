import { MouseEventHandler } from "react";

export interface IMarketsDetailUI {
  data: any;
  onClickPick: () => void;
  onClickBasket: MouseEventHandler<HTMLDivElement>;
  onClickBuy: () => void;
  router: any;
  onClickDelete: () => any;
  onClickMoveToPage: (path: any) => () => void;
  accessToken: string;
  userData: any;
}
