import { MouseEvent } from "react";

export interface ILayoutNavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
  menuList: any;
  isActive: string | null;
}
