import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUI } from "./BoardDetail.type";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.Header>
          <S.ProfileBox>
            <S.ProfileImg src="/images/profile.png" />
            <S.ProfileText>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.ProfileText>
            <S.LinkWrapper>
              <S.LinkIcon src="/images/board/link.png"></S.LinkIcon>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                <S.LinkIcon src="/images/board/map.png" />
              </Tooltip>
            </S.LinkWrapper>
          </S.ProfileBox>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
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
