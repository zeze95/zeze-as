import PicklistPage from "./list/pickList.container";
import * as S from "./mypage.styles";
import { IMyPageUI } from "./mypage.types";
import PasswordChange from "./password/password.container";
import PointPage from "./point/point.container";

export default function MyPageUI(props: IMyPageUI) {
  return (
    <>
      <S.Wrapper>
        <S.SideWrapper>
          <S.InfoWrapper>
            <S.SideHeader>MYPAGE</S.SideHeader>
            <S.MyImg src="/images/profile.png"></S.MyImg>
            <S.MyName>{props.data?.fetchUserLoggedIn.name}</S.MyName>
            <S.MyText>나의 포인트</S.MyText>
            <S.MyPoint>
              {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
              원
            </S.MyPoint>
          </S.InfoWrapper>

          <S.SideMenuWrapper>
            <S.SideMenu
              onClick={props.onClickMenu}
              isActive={props.isActive === "list"}
              id="list"
            >
              <S.SideMenuText isActive={props.isActive === "list"}>
                내 장바구니
              </S.SideMenuText>
            </S.SideMenu>
            <S.SideMenu
              onClick={props.onClickMenu}
              isActive={props.isActive === "charge"}
              id="charge"
            >
              <S.SideMenuText isActive={props.isActive === "charge"}>
                충전내역 보기
              </S.SideMenuText>
            </S.SideMenu>
            <S.SideMenu
              onClick={props.onClickMenu}
              isActive={props.isActive === "profile"}
              id="profile"
            >
              <S.SideMenuText isActive={props.isActive === "profile"}>
                비밀번호 변경
              </S.SideMenuText>
            </S.SideMenu>
          </S.SideMenuWrapper>
        </S.SideWrapper>
        <S.ListWrapeer>
          {props.isActive === "list" && <PicklistPage />}
          {props.isActive === "charge" && <PointPage />}
          {props.isActive === "profile" && <PasswordChange />}
        </S.ListWrapeer>
      </S.Wrapper>
    </>
  );
}
