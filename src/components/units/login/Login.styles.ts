import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 2.4rem;
  @media (max-width: 991px) {
    padding: 25px 0;
    gap: 1.4rem;
  }
`;

export const InsideBox = styled.div`
  width: 90%;
  /* height: 500px; */
  border: 3px solid #6e85b7;
  border-radius: 5px;
  margin: auto;
  padding: 60px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 990px) {
    padding: 40px 30px;
  }
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

export const LoginInput = styled.input`
  width: 400px;
  height: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid 6e85b7;
  padding-left: 10px;
  @media (max-width: 990px) {
    width: 80%;
  }
`;

export const LineDiv = styled.div`
  width: 80%;
  height: 20px;
  border-bottom: 1px solid #a0d2f2;
  margin-bottom: 20px;
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
  @media ${breakPoints.mobile} {
    width: 180px;
  }
`;

// span error 에러기능 함수 추가 할것

export const Error = styled.span`
  color: red;
`;
