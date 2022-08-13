import * as S from "./marketDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import PaymentPage from "../../../../../pages/markets/payment/index";
import KakakomapPage from "../../../../commons/libraries/kakao.map";

export default function MarketsDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.Header>
            <S.HeadWrapper>
              <S.ProfileWrapper>
                <S.ProfileImg src="/images/profile.png"></S.ProfileImg>
                <S.UserWrapper>
                  <S.ProfileName>
                    {/* {props.data?.fetchUseditem.seller} */}
                  </S.ProfileName>
                  <S.CreateTime>
                    {props.data?.fetchUseditem?.createdAt}
                  </S.CreateTime>
                </S.UserWrapper>
              </S.ProfileWrapper>
              <S.IconWrapper>
                <S.Pick onClick={props.onClickPick}>
                  ❤️ {props.data?.fetchUseditem.pickedCount}
                </S.Pick>
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
                >
                  <S.LinkIcon src="/images/board/map.png" />
                </Tooltip>
              </S.IconWrapper>
            </S.HeadWrapper>
          </S.Header>
          <S.RemarksWrapper>
            {props.data?.fetchUseditem?.remarks}
          </S.RemarksWrapper>
          <S.TitleDiv> {props.data?.fetchUseditem?.name}</S.TitleDiv>
          <S.Body>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.UploadImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem?.contents
                  ),
                }}
              />
            )}
            <div onClick={props.onClickBasket(props.data?.fetchUseditem)}>
              장바구니
            </div>
            <S.PriceBox>
              판매 가격 : {props.data?.fetchUseditem?.price}
            </S.PriceBox>
            <S.TagWrapper>{props.data?.fetchUseditem?.tag}</S.TagWrapper>
            <KakakomapPage
              address={props.data?.fetchUseditem.useditemAddress?.address}
            />
          </S.Body>
        </S.MainWrapper>
      </S.Wrapper>
      <S.BtnWrapper>
        <S.Btn onClick={props.onClcikMoveToList}>목록으로</S.Btn>
        {props.accessToken ? (
          <>
            <S.Btn onClick={props.onClickMoveToEdit}>수정하기</S.Btn>
            <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
          </>
        ) : (
          <S.Btn onClick={props.onClickBuy}> 결제하기</S.Btn>
        )}
      </S.BtnWrapper>
    </>
  );
}

// 나중에 보드랑 여기 목록 수정 삭제 버튼도 컴포넌트 화
