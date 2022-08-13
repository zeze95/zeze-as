import * as S from "./marketList.styles";

export default function MarketListUIAdd(props) {
  return (
    <div onClick={props.onClickTodays(props.el)}>
      <S.ListDiv>
        <S.ImgWrapper>
          {props.el?.images[0] ? (
            <S.TitleImg
              src={`https://storage.googleapis.com/${props.el?.images[0]}`} // 인덱스는 내가 임의로 넣음; 디테일에선 맵에 뿌리니깐 el로 넣는데 다른걸로 넣어야함
            ></S.TitleImg>
          ) : (
            ""
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
            <S.SellerName>
              {props.userdata?.fetchUserLoggedIn?.name}
            </S.SellerName>
          </S.SellerWrapper>
        </S.TitleBox>
        <S.RWrapper>{props.el?.price}</S.RWrapper>
      </S.ListDiv>
    </div>
  );
}
