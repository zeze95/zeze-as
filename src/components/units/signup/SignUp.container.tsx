import { useMutation } from "@apollo/client";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const schema = yup.object({
    name: yup
      .string()
      .min(2, "정확한 성명을 입력하세요")
      .max(7, "정확한 성명을 입력하세요")
      .required("성명은 필수 입력 값입니다"),
    email: yup
      .string()
      .matches(/\w+@\w+.\w+/, "정상적인 이메일이 아닙니다.")
      .required("이메일은 필수 입력사항입니다"), // 문자형인지 보고 필수입력값으로 등록
    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력바랍니다."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema), // 조건들을 넣은것
    mode: "onChange", // 검증할 시간,상황
  });

  const onClickSign = async data => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      Modal.success({ content: "회원 가입완료." });
      router.push("/main");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpUI
      onClickSign={onClickSign}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
}
