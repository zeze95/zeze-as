import LoginPageUI from "./Login.presenter";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useMutation, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

export default function LoginPageContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [userinfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const schema = yup.object({
    email: yup
      .string()
      .matches(/\w+@\w+.\w+/, "정상적인 이메일이 아닙니다.")
      .required("이메일은 필수 입력사항입니다"),
    password: yup
      .string()
      .matches(
        /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,15}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8~15자의 문자입니다"
      ),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: { email: data.email, password: data.password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("refreshToken", accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      // 3. 글로벌스테이트에 저장하기
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      Modal.success({ content: `${userinfo.name}님 환영합니다` });
      router.push("/main");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginPageUI
        onClickLogin={onClickLogin}
        register={register}
        formState={formState}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
