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
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);

  const schema = yup.object({
    email: yup
      .string()
      .matches(/\w+@\w+.\w+/, "정상적인 이메일이 아닙니다.")
      .required("이메일은 필수 입력사항입니다"), // 문자형인지 보고 필수입력값으로 등록
    password: yup
      .string()
      .matches(
        /^[a-zA-Z\\d`~!@#$%^&*()-_=+]{8,15}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8~15자의 문자입니다"
      ),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema), // 조건들을 넣은것
    mode: "onChange", // 검증할 시간,상황
  });

  // formState 검증에 걸린다면 실행시킬것
  // <div>{formState.errors.email?.message}</div> ?. 을 쓰는건 오류가 없을수도 있으니깐
  const onClickLogin = async (data) => {
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
      console.log(userInfo);

      // 3. 글로벌스테이트에 저장하기
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      Modal.success({ content: "로그인 완료" });
      router.push("/boards");
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
