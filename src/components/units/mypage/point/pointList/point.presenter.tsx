import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Lists.styles";

export default function PointListUI(props) {
  console.log(props.data);
  return (
    <S.Wrapper>
      {/* <PointListUI data={data?.fetchPointTransactionsOfSelling} /> */}
    </S.Wrapper>
  );
}
