import * as CM from "./commentWrite.styles";
import "antd/dist/antd.css";
import { Rate } from "antd";
import { IBoardCommentWriteUIProps } from "./commentWrite.types";

export default function CommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <CM.Form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickWrite)
      }
    >
      <CM.Wrapper>
        <CM.UserWrapper>
          <CM.UserInputWrapper>
            <CM.UserInput
              type="text"
              placeholder="작성자"
              defaultValue={props.el?.writer}
              {...props.register("writer")}
            />
            <CM.UserInput
              type="password"
              placeholder="비밀번호"
              {...props.register("password")}
            ></CM.UserInput>
          </CM.UserInputWrapper>
          <CM.UserInputWrapper>
            <Rate
              onChange={props.onChangeStar}
              value={props.star}
              tooltips={props.desc}
            />
            {props.isEdit && (
              <div onClick={props.onClickUpdateCancle}>수정 취소</div>
            )}
            <CM.MobileBtn
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정" : "등록"}
            </CM.MobileBtn>
          </CM.UserInputWrapper>
        </CM.UserWrapper>
        <CM.ContentsWrapper>
          <CM.Contents
            {...props.register("contents")}
            maxLength={300}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents}
          />

          <CM.Btn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </CM.Btn>
        </CM.ContentsWrapper>
      </CM.Wrapper>
    </CM.Form>
  );
}
