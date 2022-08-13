import { useState } from "react";
import PointPageUI from "./point.presenter";

export default function PointPage() {
  const [isActive, setIsActive] = useState("all");

  const onClickTap = (e) => {
    setIsActive(e.target.id);
  };

  return <PointPageUI onClickTap={onClickTap} isActive={isActive} />;
}
