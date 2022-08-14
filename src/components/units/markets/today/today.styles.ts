import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 150px;
  height: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 10px;
  align-items: center;
  background-color: #ffffff;
  margin: 5vh 5vw;
  position: fixed;
  right: 0;
  bottom: 0;
`;
export const Header = styled.div`
  width: 100%;
  height: 10%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;
export const Items = styled.div`
  width: 100%;
  height: 15%;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TodayImg = styled.img`
  width: 100%;
  height: 80%;
`;
export const ItemsName = styled.div`
  width: 100%;
  height: 20%;
  font-weight: 700;
  text-align: center;
`;
