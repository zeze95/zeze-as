import LayoutHeaderUI from "./LayoutHeader.presenter";

import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
const LOGOUT = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation(LOGOUT);

  const onClickLogout = () => {
    logoutUser();
    localStorage.removeItem("refreshToken");
    setAccessToken("");
  };

  return (
    <>
      <LayoutHeaderUI accessToken={accessToken} onClickLogout={onClickLogout} />
    </>
  );
}
