import MarketList from "../../src/components/units/markets/list/marketList.container";
import Today from "../../src/components/units/markets/today/today.container";
import styled from "@emotion/styled";

const FlexBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;
const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export default function MarketListPage() {
  return (
    <FlexBox>
      <Sticky>
        <Today />
      </Sticky>
      <MarketList></MarketList>
    </FlexBox>
  );
}
