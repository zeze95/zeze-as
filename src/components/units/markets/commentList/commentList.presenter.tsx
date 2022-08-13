import { IMarketCommentListUI } from "./commentList.types";
import * as S from "./commentList.styles";
import MarketCommentListAdd from "./commentListAdd.container";

export default function MarketCommentListUI(props: any) {
  return (
    <>
      <S.ListWrapper>
        <S.ListHeader>문의</S.ListHeader>
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <>
            <MarketCommentListAdd el={el} key={el?._id} />
          </>
        ))}
      </S.ListWrapper>
    </>
  );
}
