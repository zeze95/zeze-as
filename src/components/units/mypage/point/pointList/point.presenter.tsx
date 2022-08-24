import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Lists.styles";
interface IPointListUI {
  data: any;
}

export default function PointListUI(props: IPointListUI) {
  return (
    <S.Wrapper>
      {props.data?.map(el => (
        <S.ItemWrapper key={el._id}>
          <S.ItemText>{getDate(el.createdAt)}</S.ItemText>
          <S.ItemText>{el.useditem?.name || el.impUid || el.status}</S.ItemText>
          <S.ItemText>{el.amount.toLocaleString()}원</S.ItemText>
          <S.ItemText>{el.balance}</S.ItemText>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
}
