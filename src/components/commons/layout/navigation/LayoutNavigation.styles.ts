import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: #dff2fc;
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
  border-radius: 10px;
  border: 1px solid white;
  background-color: #a0d2f2;

  :hover {
    color: #9f8ecd;
    border: 1px solid white;
  }
`;
