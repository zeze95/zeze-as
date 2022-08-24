import { IMarketCommentListUI } from "./commentList.types";
import * as S from "./commentList.styles";
import MarketCommentListAdd from "./commentListAdd.container";

export default function MarketCommentListUI(props: IMarketCommentListUI) {
  return (
    <>
      <S.ListWrapper>
        <S.ListHeader>Q&A</S.ListHeader>
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <>
            <MarketCommentListAdd el={el} key={el?._id} />
          </>
        ))}
      </S.ListWrapper>
    </>
  );
}
