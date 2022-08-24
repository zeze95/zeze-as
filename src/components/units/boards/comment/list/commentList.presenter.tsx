import * as S from "./commentList.styles";
import { ICommentListUIProps } from "./commentList.types";
import CommentListUIAdd from "./commentList.presenter.add";
import InfiniteScroll from "react-infinite-scroller";

// myPassword
export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.ToloadFunc} hasMore={true}>
      <S.Wrapper>
        <S.ListHeader>댓글 쓰기</S.ListHeader>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.ListWrapper key={el.id} id={el.id}>
            <CommentListUIAdd el={el} />
          </S.ListWrapper>
        ))}
      </S.Wrapper>
    </InfiniteScroll>
  );
}
