import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import MarketsDetailUI from "./marketDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  FETCH_USEDITEMS_I_PICKED,
  POINT_BUYING_AND_SELLING,
} from "./marketDetail.quries";
import { basketState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function MarketsDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query._id },
  });

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    POINT_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(FETCH_USEDITEMS_I_PICKED);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [basket, setBasket] = useRecoilState(basketState);
  const onClcikMoveToList = () => {
    router.push("/markets");
  };
  const onClickBuy = async (event) => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query._id,
        },
      });
      router.push("/");
      alert("구매완료");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToEdit = () => {
    router.push(`/markets/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query._id,
        },
        refetchQueries: [{ query: FETCH_USED_ITEM }],
      });
      router.push(`/markets`);
      alert("삭제완료");
    } catch (error) {
      console.log(error);
    }
  };
  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: { useditemId: router.query._id },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query._id },
        },
      ],
    });
  };

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }
    // 3. 장바구니에 담기
    const { _typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("장바구니에 담겼습니다.");
  };

  // 삭제 함수 만들예정
  return (
    <>
      <MarketsDetailUI
        data={data}
        onClickPick={onClickPick}
        onClcikMoveToList={onClcikMoveToList}
        onClickBuy={onClickBuy}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickDelete={onClickDelete}
        onClickBasket={onClickBasket}
      />
    </>
  );
}
