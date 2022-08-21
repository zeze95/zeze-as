import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9d7;
  padding: 40px 0;
  margin: 50px 0;
`;

export const InsideWrapper = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  font-size: 20px;
  font-weight: 600;
`;
export const Link = styled.a`
  width: 30%;
  font-size: 16px;
  font-weight: 600;
  color: gray;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
export const Info = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;
