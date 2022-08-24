import {
  ApolloQueryResult,
  OperationVariables,
  QueryResult,
} from "@apollo/client";

export interface IMarketListUI {
  data: any;
  refetch: (
    variables?: Partial<{
      search: string;
    }>
  ) => Promise<ApolloQueryResult<any>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onClcikWrite: () => void;
  ToloadFunc: () => void;
}

export interface IMarketListAdd {
  el?: any;
  key?: any;
  data: any;
}

export interface IMarketListUIAdd {
  el?: any;
  key?: any;
  data: any;
  onClickMoveToPage: (path: any) => () => void;
  userdata: QueryResult<any, OperationVariables>;
}
