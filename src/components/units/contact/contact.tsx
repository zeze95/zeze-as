import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Mail from "./contact.styles";

import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import { Modal } from "antd";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function Contact() {
  const [userInfo] = useRecoilState(userInfoState);
  const form = useRef<HTMLFormElement>(null);

  const { onClickMoveToPage } = useMoveToPage();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "zeze95-serviceid",
        "template_zeze",
        form.current,
        "3TY2a1J8IJW_ir959"
      )
      .then(
        result => {
          Modal.success({ content: "메일 전송 완료하였습니다" });
          onClickMoveToPage("/main");
        },
        error => {
          Modal.error({ content: "메일 전송에 실패하였습니다." });
        }
      );
  };

  return (
    <Mail.Wrapper>
      <Mail.Title>개발자에게 메일보내기</Mail.Title>
      <Mail.FormWrapper>
        <form ref={form} onSubmit={sendEmail}>
          <Mail.InputTitle>이름</Mail.InputTitle>

          <Mail.UserS
            type="text"
            name="user_name"
            defaultValue={userInfo?.name}
            placeholder="이름을 작성해주세요"
            required
          />
          <Mail.InputTitle>이메일</Mail.InputTitle>
          <Mail.UserS
            type="email"
            name="user_email"
            defaultValue={userInfo?.email}
            placeholder="이메일을 작성해주세요"
            required
          />
          <Mail.InputTitle>피드백</Mail.InputTitle>
          <Mail.UserT
            name="message"
            placeholder="내용을 작성해주세요"
            required
          />

          <Mail.ButtonWrapper>
            <Mail.BackBtn onClick={onClickMoveToPage("./main")}>
              돌아가기
            </Mail.BackBtn>

            <Mail.SubmitBtn type="submit" value="발송하기"></Mail.SubmitBtn>
          </Mail.ButtonWrapper>
        </form>
      </Mail.FormWrapper>
    </Mail.Wrapper>
  );
}
