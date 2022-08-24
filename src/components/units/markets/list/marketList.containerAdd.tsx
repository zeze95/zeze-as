import { FETCH_USER_LOGGED_IN, FETCH_USED_ITEMS } from "./marketList.quries";

import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import MarketListUIAdd from "./marketList.presenterAdd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IMarketListAdd } from "./marketList.types";

export default function MarketListAdd(props: IMarketListAdd) {
  // const router = useRouter();

  const userdata = useQuery(FETCH_USER_LOGGED_IN);
  // const onClickTodays = (Today: any) => () => {
  //   const todays = JSON.parse(sessionStorage.getItem("todays") || "[]");
  //   const temp = todays.filter((todaysEl: any) => todaysEl._id === Today._id);

  //   if (temp.length === 1) {
  //     return;
  //   }
  //   if (todays.length >= 3) {
  //     todays.shift();
  //   }
  //   const { _typename, ...newEl } = Today;
  //   todays.push(newEl);
  //   sessionStorage.setItem("todays", JSON.stringify(todays));
  // window.location.reload()
  // };
  // .unshift()
  // const onClickMoveToMarketDetail = (MarketDetail: any) => {
  //   router.push(`/markets/${MarketDetail.target._id}`);

  // onClickTodays(MarketDetail);
  // };
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <MarketListUIAdd
      data={props.data}
      el={props.el}
      onClickMoveToPage={onClickMoveToPage}
      userdata={userdata}
    />
  );
}
