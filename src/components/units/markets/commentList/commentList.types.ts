import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketCommentListUI {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
}
export interface IMarketCommentListAdd {
  el?: any;
}

export interface IMarketCommentListUIItem {
  el?: any;
  isEdit: boolean;
  data: any;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onClickAnswer: () => void;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IAnswerListUI {
  el?: any;
}

export interface IAnswerListUIItem {
  // data?: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  answerEl?: any;
  el?: any;
}

export interface IMarketCommentListStyled {
  isEdit?: boolean;
  isAnswer?: boolean;
  isAnswerEdit?: boolean;
}
