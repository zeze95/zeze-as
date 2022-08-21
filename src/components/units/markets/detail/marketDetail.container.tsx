import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import MarketsDetailUI from "./marketDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  FETCH_USEDITEMS_I_PICKED,
  POINT_BUYING_AND_SELLING,
} from "./marketDetail.quries";
// import { basketState } from "../../../../commons/store";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function MarketsDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query._id },
  });
  const { onClickMoveToPage } = useMoveToPage();

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    POINT_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(FETCH_USEDITEMS_I_PICKED);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  // const [basket, setBasket] = useRecoilState(basketState);
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query._id,
        },
      });
      router.push("/");
      Modal.success({ content: "구매 완료" });
    } catch (error) {
      Modal.error({ content: `구매하실수 없습니다. ${error.message}` });
    }
  };

  // const onClickMoveToEdit = () => {
  //   router.push(`/markets/${router.query._id}/edit`);
  // };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query._id,
        },
        refetchQueries: [{ query: FETCH_USED_ITEM }],
      });
      router.push(`/markets`);
      Modal.success({ content: "삭제가 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query._id },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query._id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: "로그인 후 찜 할 수 있습니다." });
    }
  };

  const onClickBasket = (item: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter(basketItem => basketItem._id === item._id);
    if (temp.length === 1) {
      Modal.error({ content: "이미 담으신 물품입니다." });
      return;
    }
    // 3. 장바구니에 담기
    const { _typename, ...newItem } = item;
    baskets.push(newItem);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    Modal.success({ content: "장바구니에 담겼습니다." });
  };

  return (
    <>
      <MarketsDetailUI
        data={data}
        onClickPick={onClickPick}
        onClickMoveToPage={onClickMoveToPage}
        onClickBuy={onClickBuy}
        router={router}
        onClickDelete={onClickDelete}
        onClickBasket={onClickBasket}
        accessToken={accessToken}
      />
    </>
  );
}
