import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";

interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}
export default function Today(props) {
  return <TodayUI todaysItems={props.todaysItems} />;
}
