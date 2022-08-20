import * as S from "./marketList.styles";

export default function MarketListUIAdd(props) {
  console.log(props.el);
  return (
    <S.ListDiv>
      <S.ImgWrapper>
        {props.el?.images[0] && (
          <S.TitleImg
            src={`https://storage.googleapis.com/${props.el?.images[0]}`}
          ></S.TitleImg>
        )}
        {!props.el?.images[0] && props.el?.images[1] && (
          <S.TitleImg
            src={`https://storage.googleapis.com/${props.el?.images[1]}`}
          ></S.TitleImg>
        )}
        {!props.el?.images[0] && !props.el?.images[1] && (
          <S.TitleImg
            src={"/camp/day-night/animat-day-night-color.gif"}
          ></S.TitleImg>
        )}
      </S.ImgWrapper>
      <S.TitleBox>
        <S.Title id={props.el?._id} onClick={props.onClickMoveToMarketDetail}>
          {props.el?.name}
        </S.Title>
        <S.SubTitle>{props.el?.remarks}</S.SubTitle>
        <S.TagTitle>{props.el?.tag}</S.TagTitle>
        <S.SellerWrapper>
          <S.SellerImg src="/images/profile.png" />
          <S.SellerName>{props.el?.seller.name}</S.SellerName>
        </S.SellerWrapper>
      </S.TitleBox>
      <S.RWrapper>{props.el?.price.toLocaleString()}원</S.RWrapper>
    </S.ListDiv>
  );
}
