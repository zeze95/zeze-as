import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { basketState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import PicklistPageUI from "./pickList.presenter";

const FETCH_USER_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      updatedAt
    }
  }
`;

export default function PicklistPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });
  const [basketItems] = useRecoilState(basketState);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasket(baskets);
  }, []);

  const onClickMoveToPick = (e) => {
    router.push(`/markets/${e._id}`);
  };

  return (
    <>
      <PicklistPageUI
        data={data}
        basketItems={basketItems}
        basket={basket}
        onClickMoveToPick={onClickMoveToPick}
      />
    </>
  );
}
