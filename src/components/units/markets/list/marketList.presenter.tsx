import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import MarketListUIAdd from "./marketList.containerAdd";
import Searchbar from "../../../commons/searchbars/02/Searchbars.container";
import { BackTop } from "antd";
import { IMarketListUI } from "./marketList.types";

export default function MarketListUI(props: IMarketListUI) {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          {/* <S.TypeBtn onClick={props.onClickSoldOut(false)}>
              판매중인 상품
            </S.TypeBtn>
            <S.TypeBtn onClick={props.onClickSoldOut(true)}>
              판매된 상품
            </S.TypeBtn> */}
          <Searchbar
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
          />
          <S.Button onClick={props.onClcikWrite}>상품등록</S.Button>
        </S.Header>

        <InfiniteScroll
          pageStart={0}
          loadMore={props.ToloadFunc}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el: any) => (
            <MarketListUIAdd data={props.data} key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </S.Wrapper>
      {/* <S.SideBox> <Today /> </S.SideBox> */}
      <BackTop />
    </>
  );
}
