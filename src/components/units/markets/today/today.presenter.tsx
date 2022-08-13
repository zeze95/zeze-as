import styled from "@emotion/styled";

export const Fixed = styled.div`
  position: fixed;
  right: 15%;
  top: 20%;
`;
const Wrapper = styled.div`
  width: 155px;
  height: 373px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  overflow: scroll;
  align-items: center;
  border-radius: 10px;
  align-items: center;
  background-color: #ffffff;
`;
const Header = styled.div`
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid black;
`;
const MyRow = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid blue;
  margin: 2px;
  flex-direction: column;
`;
const TodayImg = styled.img`
  width: 100%;
`;
const MyColumn = styled.div``;

export default function TodayUI(props) {
  return (
    <Fixed>
      <Wrapper>
        <Header>Today</Header>
        {props.todaysItems.map((el) => (
          <MyRow key={el._id}>
            {el.images[0] ? (
              <TodayImg
                // onError={props.onErrorE}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            ) : (
              <TodayImg src="/camp/day-night/animat-day-night-color.gif" />
            )}
            <MyColumn>{el.name}</MyColumn>
          </MyRow>
        ))}
      </Wrapper>
    </Fixed>
  );
}
