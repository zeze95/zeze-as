import * as S from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
interface IProps {
  accessToken: string;
  onClickLogout: () => void;
  // onClickMoveTopage: MouseEventHandler<HTMLDivElement>;
}

export default function LayoutHeaderUI(props: IProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <S.LogoMain onClick={onClickMoveToPage("/main")}>
          <S.LogoImg src="/camp/road-trip/animat-road-trip-color.gif" />
          To The Moon
        </S.LogoMain>
        <S.MarginBox>
          {props.accessToken ? (
            <>
              <S.Btn onClick={onClickMoveToPage("/mypage")}>마이페이지</S.Btn>
              <S.Btn onClick={props.onClickLogout}>로그아웃</S.Btn>
            </>
          ) : (
            <>
              <S.Btn onClick={onClickMoveToPage("/signup")}>
                회원가입
                <S.HeaderImg src="/camp/sign-post/animat-sign-post-color.gif" />
              </S.Btn>
              <S.Btn onClick={onClickMoveToPage("/login")}>
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
