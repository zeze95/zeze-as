import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InsideBox = styled.div`
  width: 800px;
  /* height: 500px; */
  border: 1px solid #009dda;
  margin: auto;
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  font-size: 30px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #9f8ecd;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  align-items: center;
  justify-content: space-around;
`;

export const LoginInput = styled.input`
  width: 400px;
  height: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid violet;
  padding-left: 10px;
`;

export const LineDiv = styled.div`
  width: 600px;
  height: 20px;
  border-top: 1px solid #a0d2f2;
`;

export const LoginBtn = styled.div`
  width: 200px;
  height: 13%;
  border: 3px solid #efc4d0;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efc4d0;
`;

// span error 에러기능 함수 추가 할것

export const Error = styled.span`
  color: red;
`;
