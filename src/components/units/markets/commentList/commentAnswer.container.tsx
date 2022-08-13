import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import AnswerListUIITEM from "./commentAnswer.presenter";
import { IAnswerListUI } from "./commentList.types";
import { FETCH_ANSWERS } from "./commentList.queries";

export default function AnswerListUI(props: IAnswerListUI) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((answerEl) => (
        <AnswerListUIITEM
          key={answerEl._id}
          answerEl={answerEl}
          el={props.el}
        />
      ))}
    </>
  );
}
