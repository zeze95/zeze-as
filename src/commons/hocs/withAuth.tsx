import { gql, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, visitedPageState } from "../../commons/store";
import { getAccessToken } from "../libraries/getAccessToken";
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function useAuth() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  // const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  // const client = useApolloClient();
  useEffect(() => {
    getAccessToken().then(newAccessToken => {
      setAccessToken(newAccessToken);
    });
    if (!accessToken) {
      Modal.error({ content: "로그인 후 이동이 가능합니다" });
      router.push("/login");
      setVisitedPage(router.asPath);
    } else if (accessToken) {
      router.push(visitedPage);
    }
  }, []);
}
