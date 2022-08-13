import { useQuery } from "@apollo/client";
import { FETCH_LOADING, FETCH_TRANSACTIONS } from "./Lists.quries";
import PointListUI from "./point.presenter";
import * as S from "./Lists.styles";

export default function PointAllList(props) {
  const { data } = useQuery(FETCH_TRANSACTIONS);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderText>날짜</S.HeaderText>
        <S.HeaderText>내용</S.HeaderText>
        <S.HeaderText>거래 및 충전내역</S.HeaderText>
        <S.HeaderText>잔액</S.HeaderText>
      </S.Header>
      <PointListUI data={data?.fetchPointTransactions} />
    </S.Wrapper>
  );
}
