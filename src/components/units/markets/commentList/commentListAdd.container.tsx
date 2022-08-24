import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

import { IMarketCommentListAdd } from "./commentList.types";
import {
  DELETE_QUESTION,
  FETCH_QUESTIONS,
  FETCH_USER,
  // FETCH_USER,
} from "./commentList.queries";

import { Modal } from "antd";
import MarketCommentListUIAdd from "./commentListAdd.presenter";

export default function MarketCommentListAdd(props: IMarketCommentListAdd) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const { refetch } = useQuery(FETCH_QUESTIONS);
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const [deleteMarketComment] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_QUESTION);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteMarketComment({
        variables: {
          useditemQuestionId: props.el?._id,
        },
      });

      Modal.success({ content: "질문을 삭제했습니다." });
      refetch({ useditemId: String(router.query._id) });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickAnswer = () => {
    setIsAnswer(true);
  };

  return (
    <>
      <MarketCommentListUIAdd
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
        data={data}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onClickAnswer={onClickAnswer}
        el={props.el}
      />
    </>
  );
}
