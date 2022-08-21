import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUI } from "./BoardDetail.type";
import { Tooltip } from "antd";
import Dompurify from "dompurify";
import ShareButton from "../../../commons/buttons/share";

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Header>
          <S.ProfileImg src="/images/profile.png" />
          <S.ProfileBox>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.ProfileText>
              <S.Writer> 작성자 : {props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                작성일: {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.ProfileText>
          </S.ProfileBox>
          <ShareButton />
        </S.Header>

        <S.Body>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchBoard?.contents),
              }}
            />
          )}
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.UploadImg
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />
          )}
        </S.Body>
        <S.IconWrapper>
          <S.IconBox>
            <S.IconImg
              onClick={props.onClickLike}
              src="/images/board/like.png"
            ></S.IconImg>
            <S.IconCount>{props.data?.fetchBoard.likeCount}</S.IconCount>
          </S.IconBox>
          <S.IconBox>
            <S.IconImg
              onClick={props.onClickDislike}
              src="/images/board/dislike.png"
            ></S.IconImg>
            <S.IconCount>{props.data?.fetchBoard.dislikeCount}</S.IconCount>
          </S.IconBox>
        </S.IconWrapper>
      </S.MainWrapper>

      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard._id}
          onClick={props.onClickBoardDelete}
        >
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
