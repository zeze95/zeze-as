import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";

interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}
export default function Today(props) {
  // const onErrorE = image => {
  //   image.target.src = `https://storage.googleapis.com/${props.todaysItems[e].images[1]}`;
  // };

  return <TodayUI todaysItems={props.todaysItems} />;
}
