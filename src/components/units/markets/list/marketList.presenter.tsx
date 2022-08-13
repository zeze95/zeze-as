import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import MarketListUIAdd from "./marketList.containerAdd";
import Searchbar from "../../../commons/searchbars/02/Searchbars.container";
import Today from "../today/today.container";

export default function MarketListUI(props) {
  return (
    <>
      <S.FlexBox>
        <S.Wrapper>
          <S.Header>
            <S.TypeBtn>판매중인 상품</S.TypeBtn>
            <S.TypeBtn>판매된 상품</S.TypeBtn>
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
            {props.data?.fetchUseditems.map((el) => (
              <MarketListUIAdd data={props.data} key={el._id} el={el} />
            ))}
          </InfiniteScroll>
        </S.Wrapper>
        <S.SideBox>{/* <Today /> */}</S.SideBox>
      </S.FlexBox>
    </>
  );
}
