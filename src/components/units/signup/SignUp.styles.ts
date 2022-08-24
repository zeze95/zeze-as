import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  @media (max-width: 991px) {
    padding: 20px 0;
  }
`;

export const InsideBox = styled.div`
  width: 90%;
  /* height: 500px; */
  border: 3px solid #6e85b7;
  border-radius: 5px;
  margin: auto;
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding: 20px 0;
  }
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
export const MyForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (max-width: 990px) {
    width: 80%;
  }
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
  width: 80%;
  height: 20px;
  border-bottom: 1px solid #a0d2f2;
  margin-bottom: 20px;
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
