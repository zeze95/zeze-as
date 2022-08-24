import * as S from "./point.styles";
import PointAllList from "./pointList/pointAll.container";
import PointAllCharge from "./pointList/pointAllCharge.container";
import PointBuy from "./pointList/pointBuy.container";
import PointSell from "./pointList/pointSell.container";

interface IPointPageUI {
  onClickTap: (e: any) => void;
  isActive: string;
}

export default function PointPageUI(props: IPointPageUI) {
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.Menu id="all" onClick={props.onClickTap}>
          전체내역
        </S.Menu>
        <S.MenuLine />
        <S.Menu id="charge" onClick={props.onClickTap}>
          충전내역
        </S.Menu>
        <S.MenuLine />
        <S.Menu id="buy" onClick={props.onClickTap}>
          구매내역
        </S.Menu>
        <S.MenuLine />
        <S.Menu id="sell" onClick={props.onClickTap}>
          판매내역
        </S.Menu>
      </S.MenuWrapper>
      <S.Cotents>
        {props.isActive === "all" && <PointAllList />}
        {props.isActive === "charge" && <PointAllCharge />}
        {props.isActive === "buy" && <PointBuy />}
        {props.isActive === "sell" && <PointSell />}
      </S.Cotents>
    </S.Wrapper>
  );
}
