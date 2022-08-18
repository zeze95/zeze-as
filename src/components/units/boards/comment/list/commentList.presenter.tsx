import * as S from "./commentList.styles";
import { ICommentListUIProps } from "./commentList.types";
import CommentListUIAdd from "./commentList.presenter.add";
import InfiniteScroll from "react-infinite-scroller";

// myPassword
export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.Scroller>
      <InfiniteScroll pageStart={0} loadMore={props.ToloadFunc} hasMore={true}>
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentListUIAdd key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </S.Scroller>
  );
}
