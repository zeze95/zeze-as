import * as S from "./commentList.styles";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import MarketComment from "../commentWrite/commentWrite.container";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_ANSWER,
  FETCH_ANSWERS,
  FETCH_USER,
} from "./commentList.queries";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { IAnswerListUIItem } from "./commentList.types";

export default function AnswerListUIITEM(props: IAnswerListUIItem) {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const { refetch } =
    useQuery<Pick<IQuery, "fetchUseditemQuestionAnswers">>(FETCH_ANSWERS);
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [deleteAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_ANSWER);

  const onClickUpdate = () => {
    setIsAnswerEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteAnswer({
        variables: {
          useditemQuestionAnswerId: props.answerEl?._id,
        },
      });
      alert("질문을 삭제했습니다.");
      refetch({ useditemQuestionId: props.el?._id });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isAnswerEdit && (
        <S.AnswerWrapper key={props.answerEl?._id}>
          <S.UserSection>
            <S.AnswerImg src="/images/profile.png" />{" "}
            <S.CommentUser>{props.answerEl?.user.name}</S.CommentUser>{" "}
            {props.answerEl.user._id === data?.fetchUserLoggedIn._id && (
              <S.BtnWrapper>
                <S.Btn onClick={onClickUpdate}>수정</S.Btn>
                <S.Btn onClick={onClickDelete}>삭제</S.Btn>
              </S.BtnWrapper>
            )}
          </S.UserSection>

          <S.CommentContents>{props.answerEl?.contents}</S.CommentContents>

          <S.CommentDate>{getDate(props.answerEl?.createdAt)}</S.CommentDate>
        </S.AnswerWrapper>
      )}
      {isAnswerEdit && (
        <MarketComment
          isAnswerEdit={true}
          setIsAnswerEdit={setIsAnswerEdit}
          answerEl={props.answerEl}
        />
      )}
    </>
  );
}
