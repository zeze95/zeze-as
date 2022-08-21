import * as Landing from "./landing.styles";

export default function LandingPageUI(props) {
  return (
    <>
      {/* <Landing.Wrapper>
        <Landing.RandingPage></Landing.RandingPage>
        <Landing.TextBox onClick={props.onClickImage}>
          Show Main
        </Landing.TextBox>

        <Landing.Btn
          onClick={props.onClickMove}
          ref={props.fileRef}
        ></Landing.Btn>
      </Landing.Wrapper> */}
      <Landing.Wrapper>
        <Landing.ParalWrapper pages={2}>
          <Landing.Layer1 offset={0}>
            <Landing.LayerImg src="/landing/to.png" />
            <Landing.TextBox onClick={props.onClickMoveToPage("/main")}>
              페이지로
            </Landing.TextBox>
          </Landing.Layer1>
          <Landing.Layer2 speed={1} offset={1}>
            <Landing.LayerImg src="/landing/board.png" />
            <Landing.TextBox onClick={props.onClickMoveToPage("/boards")}>
              접속하기
            </Landing.TextBox>
          </Landing.Layer2>
        </Landing.ParalWrapper>
      </Landing.Wrapper>
    </>
  );
}
