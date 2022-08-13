import MarketWrite from "../../../../src/components/units/markets/write/marketWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query._id },
  });
  console.log(data);
  return loading ? <></> : <MarketWrite isEdit={true} boardData={data} />;
}
