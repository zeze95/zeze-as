import { gql } from "@apollo/client";

export const FETCH_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_BUY = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      status
      statusDetail
      balance
      useditem {
        name
        price
      }
      createdAt
    }
  }
`;

export const FETCH_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      price
      seller {
        _id
        name
        Email
      }
      buyer {
        name
      }
    }
  }
`;

export const FETCH_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      amount
      status
      soldAt
      useditem {
        name
        price
      }
      user {
        _id
        name
      }
    }
  }
`;
