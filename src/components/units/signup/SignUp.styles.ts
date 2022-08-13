import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsideBox = styled.div`
  width: 800px;
  height: 1000px;
  border: 1px solid #efc4d0;
  margin: auto;
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  font-size: 30px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #9f8ecd;
`;
export const LineDiv = styled.div`
  width: 600px;
  height: 20px;
  border-top: 1px solid violet;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 40px;
  text-align: center;
`;

export const Error = styled.div`
  color: red;
  font-size: 10px;
`;
