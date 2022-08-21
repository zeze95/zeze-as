import * as S from "./marketList.styles";

export default function MarketListUIAdd(props) {
  return (
    <S.ListDiv onClick={props.onClickMoveToMarketDetail}>
      <S.TitleImg
        onError={event => {
          if (event.target instanceof HTMLImageElement)
            event.target.src = "/error.png";
        }}
        src={`https://storage.googleapis.com/${props.el?.images[0]}`}
      ></S.TitleImg>
      <S.TitleBox>
        <S.Title id={props.el?._id}>제목: {props.el?.name}</S.Title>
        <S.SubTitle>상품 요약:{props.el?.remarks}</S.SubTitle>
        <S.TagTitle>{props.el?.tag}</S.TagTitle>
        <S.RWrapper>가격: {props.el?.price.toLocaleString()}원</S.RWrapper>
      </S.TitleBox>
      <S.SellerWrapper>
        판매자 정보
        <S.SellerImg src="/images/profile.png" />
        <S.SellerName>{props.el?.seller.name}</S.SellerName>
      </S.SellerWrapper>
    </S.ListDiv>
  );
}
