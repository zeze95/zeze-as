import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentUI from "./commentWrite.presenter";
import {
  FETCH_USER,
  CREATE_USEDITEM_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
  CREATE_ANSWER,
  FETCH_ANSWERS,
  UPDATE_ANSWER,
} from "./commentWrite.queries";
import { IMarketComment } from "./commentWrite.types";
import { Modal } from "antd";

export default function MarketCommentWrite(props) {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const { data: fetchQuestions, refetch: reQuestions } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_QUESTIONS, {
    variables: { useditemId: String(router.query._id) },
  });
  const { refetch: reAnswers } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(FETCH_ANSWERS);
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_QUESTION);
  const [createUseditemAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_ANSWER);
  const [updateUseditemAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_ANSWER);
  const [contents, setContents] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const createQuestion = async () => {
    if (contents) {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query._id),
        },
      });
      reQuestions({ useditemId: String(router.query._id) });
      setContents("");
      Modal.success({ content: "댓글 작성이 완료되었습니다." });
    }
  };

  const createAnswer = async () => {
    if (contents) {
      await createUseditemAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
      });
      Modal.success({ content: "답변이 등록되었습니다." });
      reAnswers({ useditemQuestionId: props.el._id });
      props.setIsAnswer?.(false);
    }
  };

  const editContents = { contents };

  if (contents) {
    editContents.contents = contents;
  } else {
    editContents.contents = props.el?.contents;
  }

  const updateQuestion = async () => {
    try {
      if (!props.el?._id) return;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: editContents,
          useditemQuestionId: props.el?._id,
        },
      });
      Modal.success({ content: "질문이 수정되었습니다." });
      reQuestions({ useditemId: String(router.query._id) });
      props.setIsEdit?.(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const answerContents = { contents };

  if (contents) {
    answerContents.contents = contents;
  } else {
    answerContents.contents = props.answerEl?.contents;
  }

  const updateAnswer = async () => {
    try {
      if (!props.answerEl?._id) return;

      await updateUseditemAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: answerContents,
          useditemQuestionAnswerId: props.answerEl?._id,
        },
      });
      Modal.success({ content: "답변이 수정되었습니다." });
      reAnswers({ useditemQuestionId: props.el?._id });
      props.setIsAnswerEdit?.(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketCommentUI
      data={data}
      handleChangeInput={handleChangeInput}
      createQuestion={createQuestion}
      fetchQuestions={fetchQuestions}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
      isAnswer={props.isAnswer}
      updateQuestion={updateQuestion}
      createAnswer={createAnswer}
      isAnswerEdit={props.isAnswerEdit}
      updateAnswer={updateAnswer}
      answerEl={props.answerEl}
    />
  );
}
