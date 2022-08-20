import * as L from "./link.styles";

export default function LinkPageUI(props) {
  return (
    <L.Wrapper>
      <L.HeaderTitle>공공 여행 사이트</L.HeaderTitle>
      <L.HighLighting />
      <L.Nation>
        {props.nation.map((el: any) => (
          <L.NationItem key={el.page} href={el.page}>
            {el.image ? <L.Back src={el.image} /> : <div>{el.name}</div>}
          </L.NationItem>
        ))}
      </L.Nation>
      <L.HeaderTitle>예약 관련 사이트</L.HeaderTitle>
      <L.HighLighting />
      <L.booking>
        {props.booking.map((el: any) => (
          <L.NationItem key={el.page}>
            {el.image ? <L.Back src={el.image} /> : <div>{el.name}</div>}
          </L.NationItem>
        ))}
      </L.booking>
    </L.Wrapper>
  );
}
