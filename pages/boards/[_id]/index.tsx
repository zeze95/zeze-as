import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/comment/list/commentList.container";
import CommentWrite from "../../../src/components/units/comment/write/commentWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <BoardCommentList />
    </>
  );
}
