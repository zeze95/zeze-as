import * as Today from "./today.styles";

export default function TodayUI(props) {
  return (
    <Today.Wrapper>
      <Today.Header>Today</Today.Header>
      {props.todaysItems.map((today: any) => (
        <Today.Items key={today._id}>
          {today.images[0] ? (
            <Today.TodayImg
              // onError={props.onError}
              src={`https://storage.googleapis.com/${today.images[0]}`}
            />
          ) : (
            <Today.TodayImg src="/camp/day-night/animat-day-night-color.gif" />
          )}
          <Today.ItemsName>{today.name}</Today.ItemsName>
        </Today.Items>
      ))}
    </Today.Wrapper>
  );
}
