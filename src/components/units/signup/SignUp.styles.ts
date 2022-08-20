import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;

export const InsideBox = styled.div`
  width: 800px;
  /* height: 500px; */
  border: 3px solid #6e85b7;
  border-radius: 5px;
  margin: auto;
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0px;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #001d6e;
`;
export const HighLighting = styled.div`
  opacity: 0.35;
  width: 14em;
  height: 1em;
  margin-top: -2em;
  margin-bottom: 0em;
  background-color: #6e85b7;
`;
export const LineDiv = styled.div`
  width: 600px;
  height: 20px;
  border-top: 1px solid #6e85b7;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 40px;
  text-align: center;
`;

export const Error = styled.div`
  color: red;
  font-size: 10px;
`;
