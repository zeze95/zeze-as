import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken() {
  try {
    //2-1. refreshToken으로 accessToken을 재발급 받기
    const graphqlClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    // 리프레쉬 토큰이 만료된 상황으로 로그인 화면으로 넘어간다던가 로그인 ㄹ하세요 라고 시키든가
    // alert(error.message);
  }
}
