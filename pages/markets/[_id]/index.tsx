import MarketCommentList from "../../../src/components/units/markets/commentList/commentList.container";
import MarketCommentWrite from "../../../src/components/units/markets/commentWrite/commentWrite.container";
import MarketsDetail from "../../../src/components/units/markets/detail/marketDetail.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketsDetail />
      <MarketCommentList />
      <MarketCommentWrite />
    </>
  );
}
