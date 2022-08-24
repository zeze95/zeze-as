import * as Main from "./main.styles";

import MainMarketUI from "./main.market.presenter";
import MainboardUI from "./main.board.presenter";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function MainPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Main.Wrapper>
        <Main.HeaderTitle onClick={onClickMoveToPage("markets")}>
          오늘의 중고 상품을 만나보세요!
        </Main.HeaderTitle>
        <Main.HighLighting />
        <Main.MainImg src="/main/002.png" />
        <MainMarketUI onClickMoveToPage={onClickMoveToPage} />
        <Main.HeaderTitle onClick={onClickMoveToPage("boards")}>
          오늘의 게시물은 무엇일까요?
        </Main.HeaderTitle>
        <Main.HighLighting />
        <Main.MainImg src="/main/003.png" />
        <MainboardUI onClickMoveToPage={onClickMoveToPage} />
      </Main.Wrapper>
    </>
  );
}
