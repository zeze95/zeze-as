import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";

interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}
export default function Today() {
  const [todaysItems, setTodaysItems] = useState([]);

  useEffect(() => {
    const todays = JSON.parse(sessionStorage.getItem("todays") || "[]");

    setTodaysItems(todays);
    sessionStorage.getItem("todays");
  }, []);

  const onErrorE = (e) => {
    e.target.src = `https://storage.googleapis.com/${todaysItems[e].images[1]}`;
  };

  return <TodayUI todaysItems={todaysItems} onErrorE={onErrorE} />;
}
