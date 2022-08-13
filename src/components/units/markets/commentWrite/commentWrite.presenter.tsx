import * as S from "./commentWrite.styles";
import { IMarketCommentUI } from "./commentWrite.types";

export default function CommentWriteUI(props: any) {
  return (
    <>
      <S.CommentWrapper>
        <S.InputWrapper>
          <S.UserName>
            {props.data
              ? props.data?.fetchUserLoggedIn.name
              : "로그인 후 이용 가능합니다"}
          </S.UserName>
          {!props.isEdit && !props.isAnswerEdit && (
            <S.UserInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.handleChangeInput}
              value={props.contents}
            ></S.UserInput>
          )}
          {props.isEdit && (
            <S.UserInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.handleChangeInput}
              defaultValue={props.el?.contents || ""}
            ></S.UserInput>
          )}
          {props.isAnswerEdit && (
            <S.UserInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.handleChangeInput}
              defaultValue={props.answerEl?.contents || ""}
            ></S.UserInput>
          )}
          <S.Footer>
            {props.isEdit && (
              <S.Btn onClick={props.updateQuestion}>질문수정</S.Btn>
            )}
            {!props.isEdit && !props.isAnswer && !props.isAnswerEdit && (
              <S.Btn onClick={props.createQuestion}>질문등록</S.Btn>
            )}
            {!props.isEdit && !props.isAnswer && props.isAnswerEdit && (
              <S.Btn onClick={props.updateAnswer}>답글수정</S.Btn>
            )}
            {!props.isEdit && props.isAnswer && (
              <S.Btn onClick={props.createAnswer}>답글등록</S.Btn>
            )}
          </S.Footer>
        </S.InputWrapper>
      </S.CommentWrapper>
    </>
  );
}
