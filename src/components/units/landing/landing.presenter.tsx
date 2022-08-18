import * as Landing from "./landing.styles";

export default function LandingPageUI(props) {
  return (
    <>
      <Landing.Wrapper>
        <Landing.RandingPage></Landing.RandingPage>
        <Landing.TextBox onClick={props.onClickImage}>
          Show Main
        </Landing.TextBox>

        <Landing.Btn
          onClick={props.onClickMove}
          ref={props.fileRef}
        ></Landing.Btn>
      </Landing.Wrapper>
    </>
  );
}
