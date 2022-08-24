import { useQuery } from "@apollo/client";
import { FETCH_LOADING } from "./Lists.quries";
import PointListUI from "./point.presenter";
import * as S from "./Lists.styles";

export default function PointAllCharge() {
  const { data } = useQuery(FETCH_LOADING);

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderText>날짜</S.HeaderText>
        <S.HeaderText>결제 ID</S.HeaderText>
        <S.HeaderText>충전내역</S.HeaderText>
        <S.HeaderText>충전 후 잔액</S.HeaderText>
      </S.Header>
      <PointListUI data={data?.fetchPointTransactionsOfLoading} />
    </S.Wrapper>
  );
}
