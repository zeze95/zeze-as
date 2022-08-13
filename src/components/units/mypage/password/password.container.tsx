import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import PasswordChangeUI from "./password.presenter";
import { RESET_PASSWORD } from "./password.quries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  password: yup
    .string()
    .matches(
      / ^[a-zA-Z0-9]{8,16}$/,
      "비밀번호는 영문, 숫자를 포함한 8~16자의 문자입니다"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});
export default function PasswordChange() {
  const [resetUserPassword] = useMutation(RESET_PASSWORD);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema), // 조건들을 넣은것
    mode: "onChange", // 검증할 시간,상황
  });

  const onClickChange = async (data: any) => {
    try {
      await resetUserPassword({
        variables: { password: data.password },
      });
    } catch (error) {
      Modal.success({ content: "비밀번호 변경이 완료되었습니다" });
    }
  };

  return (
    <PasswordChangeUI
      onClickChange={onClickChange}
      onChagePassword={onClickChange}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
