import { gql, useQuery } from "@apollo/client";

// import { basketState } from "../../../../commons/store";
// import { useRecoilState } from "recoil";
// import { useEffect } from "react";
// import { useState } from "react";
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
      seller {
        name
      }
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

  const onClickMoveToPick = (Item: any) => {
    router.push(`/markets/${Item._id}`);
  };

  return (
    <>
      <PicklistPageUI data={data} onClickMoveToPick={onClickMoveToPick} />
    </>
  );
}
