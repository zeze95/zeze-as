import * as S from "./commentWrite.styles";
import ICommentWriteUIProps from "./commentWrite.types";
import "antd/dist/antd.css";
import { Rate } from "antd";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TextWrapper>
          <S.TextBox
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.el?.writer}
          />
          <S.TextBox
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.TextBox>
          <S.RateBox>
            <Rate
              onChange={props.onChangeStar}
              value={props.star}
              tooltips={props.desc}
            />
          </S.RateBox>
        </S.TextWrapper>
        <S.ContentsBox>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents}
          />
          <S.BottomBox>
            <S.limit>a/100</S.limit>
            <S.Button
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.Button>
          </S.BottomBox>
        </S.ContentsBox>
      </S.Wrapper>
    </>
  );
}
