import { useQuery } from "@apollo/client";
import { FETCH_BUY } from "./Lists.quries";
import PointListUI from "./point.presenter";
import * as S from "./Lists.styles";
export default function PointBuy() {
  const { data } = useQuery(FETCH_BUY);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderText>거래일</S.HeaderText>
        <S.HeaderText>상품명</S.HeaderText>
        <S.HeaderText>거래내역</S.HeaderText>
        <S.HeaderText>거래후 잔액</S.HeaderText>
      </S.Header>
      <PointListUI data={data?.fetchPointTransactionsOfBuying} />
    </S.Wrapper>
  );
}
