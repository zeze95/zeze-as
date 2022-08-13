import { FETCH_USER_LOGGED_IN, FETCH_USED_ITEMS } from "./marketList.quries";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUIAdd from "./marketList.presenterAdd";

export default function MarketListAdd(props) {
  const router = useRouter();

  const userdata = useQuery(FETCH_USER_LOGGED_IN);
  const onClickTodays = (el) => () => {
    const todays = JSON.parse(sessionStorage.getItem("todays") || "[]");
    const temp = todays.filter((todaysEl) => todaysEl._id === el._id);

    if (temp.length === 1) {
      return;
    }
    if (todays.length >= 3) {
      todays.shift();
    }
    const { _typename, ...newEl } = el;
    todays.push(newEl);
    sessionStorage.setItem("todays", JSON.stringify(todays));
    // window.location.reload()
  };
  // .unshift()
  const onClickMoveToMarketDetail = (e) => {
    router.push(`/markets/${e.currentTarget.id}`);
  };

  return (
    <MarketListUIAdd
      data={props.data}
      key={props.key}
      el={props.el}
      onClickTodays={onClickTodays}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      userdata={userdata}
    />
  );
}
