import * as S from "./commentList.styles";
import { ICommentListUIPropsAdd } from "./commentList.types";
import { Rate, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";
import BoardCommentWrite from "../write/commentWrite.container";
// props 타입
// myPassword

export default function CommentListUIAdd(props: ICommentListUIPropsAdd) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDeleteIn = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      Modal.success({ content: "삭제완료" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickDelete = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDeleteIn} onCancel={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.Password type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.Wrapper>
          <S.FlexBox>
            <S.ProfileDiv>
              <S.ProfileImg src="/images/profile.png" />
            </S.ProfileDiv>
            <S.WriterWrapper>
              <S.HeaderDiv>
                <S.Align>
                  <S.WriterName>{props.el?.writer}</S.WriterName>
                  <Rate value={props.el?.rating} disabled />
                </S.Align>
                <S.IconDiv>
                  <S.UpdateIcon id={props.el?._id} onClick={onClickUpdate} />
                  <S.DeleteIcon id={props.el?._id} onClick={onClickDelete} />
                </S.IconDiv>
              </S.HeaderDiv>
              <S.Contents>{props.el?.contents}</S.Contents>
              <S.CreateDate>{props.el?.createdAt}</S.CreateDate>
            </S.WriterWrapper>
          </S.FlexBox>
        </S.Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
