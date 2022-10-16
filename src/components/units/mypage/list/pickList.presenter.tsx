import { getDate } from "../../../../commons/libraries/utils";
import * as Pick from "./myPageList.stlyes";

interface IPicklistPageUI {
  data: any;
  onClickMoveToPick: (Item: any) => void;
}

export default function PicklistPageUI(props: IPicklistPageUI) {
  return (
    <>
      <Pick.Header> 나의 찜 목록 </Pick.Header>
      <Pick.HeaderWrapper>
        <Pick.HeaderName>상품명</Pick.HeaderName>
        <Pick.HeaderPrice>가격</Pick.HeaderPrice>
        <Pick.HeaderRemarks>내용</Pick.HeaderRemarks>
        <Pick.HeaderSeller>판매자</Pick.HeaderSeller>
        <Pick.HeaderCreateTime>올린시간</Pick.HeaderCreateTime>
      </Pick.HeaderWrapper>
      {props.data?.fetchUseditemsIPicked.map((el: any) => (
        <Pick.ItemWrapper
          onClick={props.onClickMoveToPick}
          key={el._id}
          id={el._id}
        >
          <Pick.Name>{el.name}</Pick.Name>
          <Pick.Price>{el.price.toLocaleString()}원</Pick.Price>
          <Pick.Remarks>{el.remarks}</Pick.Remarks>
          <Pick.Seller>{el.seller.name}</Pick.Seller>
          <Pick.CreateTime>{getDate(el.createdAt)}</Pick.CreateTime>
        </Pick.ItemWrapper>
      ))}
    </>
  );
}
