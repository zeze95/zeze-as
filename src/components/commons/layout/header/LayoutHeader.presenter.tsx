import * as S from "./LayoutHeader.styles";
import { accessTokenState } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
import { MouseEventHandler } from "react";

interface IProps {
  accessToken: string;
  onClickLogout: () => void;
  onClickMoveTopage: MouseEventHandler<HTMLDivElement>;
}

export default function LayoutHeaderUI(props: IProps) {
  return (
    <>
      <S.Wrapper>
        <S.LogoMain onClick={props.onClickMoveTopage} id="/main">
          <S.HeaderImg src="/camp/road-trip/animat-road-trip-color.gif" />
          To The Moon
        </S.LogoMain>
        <S.MarginBox>
          {props.accessToken ? (
            <>
              <S.Btn onClick={props.onClickMoveTopage} id="/mypage">
                마이페이지
              </S.Btn>
              <S.Btn onClick={props.onClickLogout}>
                로그아웃
                <S.HeaderImg src="/camp/tent/animat-tent-color.gif" />
              </S.Btn>
            </>
          ) : (
            <>
              <S.Btn onClick={props.onClickMoveTopage} id="/signup">
                회원가입
                <S.HeaderImg src="/camp/sign-post/animat-sign-post-color.gif" />
              </S.Btn>
              <S.Btn onClick={props.onClickMoveTopage} id="/login">
                로그인
                <S.HeaderImg src="/camp/compass/animat-compass-color.gif" />
              </S.Btn>
            </>
          )}
        </S.MarginBox>
      </S.Wrapper>
    </>
  );
}
