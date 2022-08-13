import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ISearchbarProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbarUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
