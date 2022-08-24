import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boards/comment/list/commentList.container";
import CommentWrite from "../../../src/components/units/boards/comment/write/commentWrite.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default function BoardDetailPage() {
  return (
    <Wrapper>
      <BoardDetail />
      <BoardCommentList />
      <CommentWrite />
    </Wrapper>
  );
}
