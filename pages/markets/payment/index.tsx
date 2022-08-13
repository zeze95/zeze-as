import Payments from "../../../src/components/units/markets/payment/payment.containert";
import { gql, useQuery } from "@apollo/client";
import { accessTokenState } from "../../../src/commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { withAuth } from "../../../src/components/commons/hocs/withAuth";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function PaymentPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이동이 가능합니다");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div>
        {accessToken ? (
          <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
