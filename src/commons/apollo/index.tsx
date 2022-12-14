import "../styles/globalStyles";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { useEffect, ReactNode } from "react";
import { accessTokenState } from "../store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../libraries/getAccessToken";
import { useRouter } from "next/router";
interface ILayoutProps {
  children: ReactNode;
}

export default function ApolloSetting(props: ILayoutProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  useEffect(() => {
    getAccessToken().then(newAccessToken => {
      setAccessToken(newAccessToken);
    });
  }, [router]);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then(newAccessToken => {
            setAccessToken(newAccessToken);
            operation.setContext({
              Headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    // uri: "http://backend07.codebootcamp.co.kr/graphql",
    uri: "https://backend07.codebootcamp.co.kr/graphql04",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
