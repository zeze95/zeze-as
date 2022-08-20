import { useQuery } from "@apollo/client";
import * as Main from "./main.styles";
import { FETCH_USED_ITEMS } from "./main.queries";
import MainMarketUI from "./main.market.presenter";
import MainboardUI from "./main.board.prsenter";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function MainPage() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Main.Wrapper>
        <Main.MainImg src="/main/002.png" />
        <Main.HeaderTitle>오늘의 중고 상품을 만나보세요</Main.HeaderTitle>
        <Main.HighLighting />
        <MainMarketUI />
        <Main.MainImg src="/main/003.png" />
        <Main.HeaderTitle>오늘의 게시물은 무엇일까요</Main.HeaderTitle>
        <Main.HighLighting />
        <MainboardUI onClickMoveToPage={onClickMoveToPage} />
      </Main.Wrapper>
    </>
  );
}
