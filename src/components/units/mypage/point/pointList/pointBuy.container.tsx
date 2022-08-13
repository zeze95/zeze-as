import { useQuery } from "@apollo/client";
import { FETCH_BUY } from "./Lists.quries";
import PointListUI from "./point.presenter";
import * as S from "./Lists.styles";
export default function PointBuy(props) {
  const { data } = useQuery(FETCH_BUY);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderText>날짜</S.HeaderText>
        <S.HeaderText>내용</S.HeaderText>
        <S.HeaderText>거래 및 충전내역</S.HeaderText>
        <S.HeaderText>잔액</S.HeaderText>
      </S.Header>
      <PointListUI data={data?.fetchPointTransactionsOfBuying} />
    </S.Wrapper>
  );
}
