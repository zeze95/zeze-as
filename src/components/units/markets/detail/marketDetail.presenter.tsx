import * as S from "./marketDetail.styles";
import Dompurify from "dompurify";
import { Tooltip } from "antd";
import KakakomapPage from "../../../../commons/libraries/kakao.map";
import { IMarketsDetailUI } from "./marketDetail.types";
import { getDate } from "../../../../commons/libraries/utils";
import ShareButton from "../../../commons/buttons/share";
import { LikeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function MarketsDetailUI(props: IMarketsDetailUI) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.Header>
            <S.ProfileImg src="/images/profile.png" />
            <S.ProfileBox>
              <S.Title>{props.data?.fetchUseditem?.name}</S.Title>
              <S.ProfileText>
                <S.Writer>
                  작성자 : {props.data?.fetchUseditem.seller.name}
                </S.Writer>
                <S.CreatedAt>
                  작성일: {getDate(props.data?.fetchUseditem?.createdAt)}
                </S.CreatedAt>
              </S.ProfileText>
            </S.ProfileBox>
            <S.IconWrapper>
              <Tooltip placement="topRight" title={`장바구니에 담기`}>
                <ShoppingCartOutlined onClick={props.onClickBasket} />
              </Tooltip>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchUseditem.pickedCount}개의 좋아요가 있습니다`}
              >
                <LikeOutlined onClick={props.onClickBasket} />
              </Tooltip>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              >
                <S.LinkIcon />
              </Tooltip>
            </S.IconWrapper>
          </S.Header>

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
          </S.Body>
          <S.PriceBox>
            판매 가격 : {props.data?.fetchUseditem?.price.toLocaleString()}원
          </S.PriceBox>
          <S.RemarksWrapper>
            {props.data?.fetchUseditem?.remarks}
          </S.RemarksWrapper>
          <S.TagWrapper>#{props.data?.fetchUseditem?.tag}</S.TagWrapper>
          <KakakomapPage
            address={props.data?.fetchUseditem?.useditemAddress?.address}
          />
          <br />
          <ShareButton />
        </S.MainWrapper>
        <S.BottomWrapper>
          <S.Btn onClick={props.onClickMoveToPage("/markets")}>목록으로</S.Btn>
          {props.userData === props.data?.fetchUseditem.seller.email ? (
            <>
              <S.Btn
                onClick={props.onClickMoveToPage(
                  `/markets/${props.router.query._id}/edit`
                )}
              >
                수정하기
              </S.Btn>
              <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
            </>
          ) : (
            <S.Btn onClick={props.onClickBuy}> 결제하기</S.Btn>
          )}
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
