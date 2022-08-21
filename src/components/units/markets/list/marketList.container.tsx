import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function MarketList() {
  const router = useRouter();
  // const [isSoldout, setIsSoldout] = useState<boolean | string>(true);
  const [keyword, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { search: keyword },
  });

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onClcikWrite = () => {
    router.push(`/markets/new`);
  };
  // const onClickSoldOut = (event: string) => {
  //   setIsSoldout(event);
  //   refetch({ search: keyword, isSoldout });
  // };
  const ToloadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onClcikWrite={onClcikWrite}
      ToloadFunc={ToloadFunc}
      // onClickSoldOut={onClickSoldOut}
    />
  );
}
