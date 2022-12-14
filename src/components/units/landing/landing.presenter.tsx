import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import * as Landing from "./landing.styles";

export default function LandingPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Landing.Wrapper>
        <Landing.ParalWrapper pages={2}>
          <Landing.Layer1 offset={0}>
            <Landing.LayerImg1 />
            <Landing.TextBox onClick={onClickMoveToPage("/main")}>
              페이지로
            </Landing.TextBox>
          </Landing.Layer1>
          <Landing.Layer2 speed={1} offset={1}>
            <Landing.LayerImg2 />
            <Landing.TextBox onClick={onClickMoveToPage("/boards")}>
              접속하기
            </Landing.TextBox>
          </Landing.Layer2>
        </Landing.ParalWrapper>
      </Landing.Wrapper>
    </>
  );
}
