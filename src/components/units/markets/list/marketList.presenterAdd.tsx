import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./marketList.styles";
import { IMarketListUIAdd } from "./marketList.types";

export default function MarketListUIAdd(props: IMarketListUIAdd) {
  return (
    <S.ListDiv onClick={props.onClickMoveToPage(`/markets/${props.el._id}`)}>
      <S.TitleImg
        onError={event => {
          if (event.target instanceof HTMLImageElement)
            event.target.src = "/error.png";
        }}
        src={`https://storage.googleapis.com/${props.el?.images[0]}`}
      ></S.TitleImg>
      <S.TitleBox>
        <S.Title id={props.el?._id}>
          <S.Text>제목: </S.Text>
          {props.el?.name}
        </S.Title>
        <S.SubTitle>
          <S.Text>상품 요약: </S.Text>
          {props.el?.remarks}
        </S.SubTitle>
        <S.TagTitle>{props.el?.tag}</S.TagTitle>
        <S.RWrapper>
          <S.Text>가격: </S.Text>
          {props.el?.price.toLocaleString()}원
        </S.RWrapper>
      </S.TitleBox>
      <S.SellerWrapper>
        판매자 정보
        <S.SellerImg src="/images/profile.png" />
        <S.SellerName>{props.el?.seller.name}</S.SellerName>
        <S.CreatAt>{getDate(props.el?.createdAt)}</S.CreatAt>
      </S.SellerWrapper>
    </S.ListDiv>
  );
}
