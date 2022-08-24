import { MouseEventHandler } from "react";

export interface IMainMarketUI {
  onClickMoveToPage: (path: any) => MouseEventHandler<HTMLDivElement>;
}

export interface IMainboardUI {
  onClickMoveToPage: (path: any) => MouseEventHandler<HTMLDivElement>;
}
