import MarketCommentWrite from "../commentWrite/commentWrite.container";
import { IMarketCommentListUIItem } from "./commentList.types";
import * as S from "./commentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import AnswerListUI from "./commentAnswer.container";

export default function MarketCommentListUIAdd(props: any) {
  return (
    <>
      {!props.isEdit && (
        <S.CommentWrapper>
          <S.UserSection>
            <S.UserImg src="/images/profile.png" />
            <S.CommentUser>{props.el?.user.name}</S.CommentUser>
            {props.el.user._id === props.data?.fetchUserLoggedIn._id && (
              <S.BtnWrapper>
                <S.Btn onClick={props.onClickUpdate}>수정</S.Btn>
                <S.Btn onClick={props.onClickDelete}>삭제</S.Btn>
              </S.BtnWrapper>
            )}
          </S.UserSection>
          <S.CommentContents>{props.el?.contents}</S.CommentContents>
          <S.CommentFooter>
            <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
            <span onClick={props.onClickAnswer}>답글쓰기</span>
          </S.CommentFooter>
          {props.isAnswer && (
            <MarketCommentWrite
              isAnswer={true}
              setIsAnswer={props.setIsAnswer}
              el={props.el}
            />
          )}
          <AnswerListUI el={props.el} />
        </S.CommentWrapper>
      )}
      {props.isEdit && (
        <MarketCommentWrite
          isEdit={true}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
