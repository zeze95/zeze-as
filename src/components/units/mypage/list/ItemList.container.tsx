import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import * as S from "./myPageList.stlyes";
import { basketState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

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
      {data?.fetchUseditemsIPicked.map((el) => (
        <S.Wrapper key={el.id}>
          <S.Name onClick={onClickMoveToPick}>{el._id}</S.Name>
          <S.Price></S.Price>
        </S.Wrapper>
      ))}

      <S.Name>장바구니 수량 {basketItems.length}</S.Name>
      {basket.map((el) => (
        <>
          <S.Name key={el.id}>아이디 {el._id}</S.Name>
          <S.Name>제목: {el.name}</S.Name>
        </>
      ))}
    </>
  );
}
