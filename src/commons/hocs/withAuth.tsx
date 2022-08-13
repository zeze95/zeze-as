import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../commons/store";
import { getAccessToken } from "../libraries/getAccessToken";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    if (!accessToken) {
      alert("로그인 후 이동이 가능합니다");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
