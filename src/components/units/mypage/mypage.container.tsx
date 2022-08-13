import MyPageUI from "./mypage.presenter";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, FETCH_USER_PICKED } from "./mypage.queries";
import { useState } from "react";

export default function MyPageContainer(props) {
  const [userInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [isActive, setIsActive] = useState<string | null>(null);

  // const onClickMypick = () => {
  //   setIsActive(Mypic)
  // };
  // const onClickMyBuyItem = () => {};
  // const onClickMyBoard = () => {};
  // const onClickMySellItem = () => {};

  const onClickMenu = (e: any) => {
    setIsActive(e.currentTarget.id);
  };

  return (
    <MyPageUI
      userInfo={userInfo}
      data={data}
      onClickMenu={onClickMenu}
      isActive={isActive}
    />
  );
}
