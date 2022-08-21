import styled from "@emotion/styled";
interface IActive {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #b2c8df;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: auto;
`;

export const MapDiv = styled.div``;

export const MenuBtn = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #f8f9d7;
  background-color: ${(props: IActive) =>
    props.isActive ? "#c4d7e0" : "#C4DDFF"};
  color: ${(props: IActive) => (props.isActive ? "#ffffff" : "")};
  cursor: pointer;
  :hover {
    color: #ffffff;
    border: 1px solid #001d6e;
    background-color: #001d6e;
  }
`;
