import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  // 목록 버튼 함수
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정 버튼 함수

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query._id}/edit`);
  };

  // 삭제버튼 함수
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickBoardDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query._id,
        },
        refetchQueries: [{ query: FETCH_BOARD }],
      });
      router.push(`/boards`);
      Modal.success({ content: "삭제가 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: "삭제를 할수 없습니다" });
    }
  };

  // 라이크 함수 만들기

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickBoardDelete={onClickBoardDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
