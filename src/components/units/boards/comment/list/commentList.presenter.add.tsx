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
import { getDate } from "../../../../../commons/libraries/utils";

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
    setIsOpenDeleteModal(prev => !prev);
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
        <S.CommentWrapper>
          <S.UserSection>
            <S.UserImg src="/images/profile.png" />
            <S.CommentUser>{props.el?.writer}</S.CommentUser>
          </S.UserSection>
          <S.LineDiv />
          <S.ContentsSection>
            <S.IconSection>
              <Rate value={props.el?.rating} disabled />
              <S.BtnWrapper>
                <S.Btn onClick={onClickUpdate}>
                  <S.UpdateIcon />
                  {/**  수정 **/}
                </S.Btn>
                <S.Btn onClick={onClickDelete}>
                  <S.DeleteIcon />
                  {/**  삭제 **/}
                </S.Btn>
              </S.BtnWrapper>
            </S.IconSection>
            <S.TextSection>
              <S.CommentContents>{props.el?.contents}</S.CommentContents>
              <S.CommentFooter>
                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
              </S.CommentFooter>
            </S.TextSection>
          </S.ContentsSection>
        </S.CommentWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
