import { WithAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/markets/write/marketWrite.container";

function MaketWirtePage() {
  return (
    <>
      <MarketWrite isEdit={false} />
    </>
  );
}
export default MaketWirtePage;
// export default WithAuth(MaketWirtePage);
