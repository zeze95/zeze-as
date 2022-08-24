import CommentWriteUI from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/commentList.queries";
import {
  IBoardCommentWriteProps,
  IBoardCommentWriteUIProps,
  IUpdateBoardCommentInput,
} from "./commentWrite.types";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup
    .string()
    .required("필수 입력 사항입니다.")
    .max(10, "10자 이내로 입력해주세요."),
  password: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
});

export default function CommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [contents, setContents] = useState("");
  const [star, setStar] = useState(3);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENTS);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  // const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
  //   setWriter(event.target.value);
  // };

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setContents(event.target.value);
  // };
  const desc = ["1점", "2점", "3점", "4점", "5점"];
  const onChangeStar = (star: number) => {
    setStar(star);
  };

  const onClickWrite = async (data: any) => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: String(data.contents),
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
      Modal.success({ content: "댓글 등록이 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      if (!props.el?._id) return;

      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents) updateBoardCommentInput.contents = data.contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({ content: "댓글 수정이 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickUpdateCancle = () => {
    props.setIsEdit?.(false);
  };

  return (
    <CommentWriteUI
      onClickWrite={onClickWrite}
      onChangeStar={onChangeStar}
      star={star}
      setStar={setStar}
      onClickUpdate={onClickUpdate}
      desc={desc}
      el={props.el}
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickUpdateCancle={onClickUpdateCancle}
    />
  );
}
