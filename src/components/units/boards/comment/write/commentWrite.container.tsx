import CommentWriteUI from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  CREATE_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/commentList.queries";
import {
  IBoardCommentWriteUIProps,
  IUpdateBoardCommentInput,
} from "./commentWrite.types";
import { Modal } from "antd";

export default function CommentWrite(props: IBoardCommentWriteUIProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENTS);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const desc = ["1점", "2점", "3점", "4점", "5점"];
  const onChangeStar = (star: number) => {
    setStar(star);
  };

  const onClickWrite = async () => {
    if (!writer && !contents && !contents) {
      Modal.error({ content: "입력된 내용이 없습니다" });
      return;
    }
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error });
    }
  };

  const onClickUpdate = async () => {
    if (!contents) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      if (!props.el?._id) return;

      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}
      onChangeStar={onChangeStar}
      star={star}
      setStar={setStar}
      onClickUpdate={onClickUpdate}
      desc={desc}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
