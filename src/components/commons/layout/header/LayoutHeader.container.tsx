import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
const LOGOUT = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation(LOGOUT);
  const onClickMoveTopage = (e) => {
    onClickMoveToPage(e.target.id)();
  };

  const onClickLogout = () => {
    logoutUser();
    localStorage.removeItem("refreshToken");
    setAccessToken("");
  };

  return (
    <>
      <LayoutHeaderUI
        onClickMoveTopage={onClickMoveTopage}
        onClickLogout={onClickLogout}
      />
    </>
  );
}
