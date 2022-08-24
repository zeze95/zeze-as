import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import { Modal } from "antd";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import ContactUI from "./contact.presenter";

export default function Contact() {
  const [userInfo] = useRecoilState(userInfoState);
  const form = useRef<HTMLFormElement>(null);

  const { onClickMoveToPage } = useMoveToPage();

  const onClicksendEmail = (e: { preventDefault: () => void }) => {
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
          Modal.error({ content: error.message });
        }
      );
  };

  return (
    <ContactUI
      form={form}
      onClicksendEmail={onClicksendEmail}
      userInfo={userInfo}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
