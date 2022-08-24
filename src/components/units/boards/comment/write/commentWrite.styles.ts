import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../styles/media";
export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  /* margin: 0px 100px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #daeaf1;
  padding: 1% 5%;
  @media ${breakPoints.mobile} {
    height: auto;
    min-height: 160px;
  }
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media ${breakPoints.mobile} {
    height: auto;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
export const UserInputWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media ${breakPoints.mobile} {
    justify-content: space-between;
    width: 100%;
  }
`;
export const UserInput = styled.input`
  width: 180px;
  height: 50px;
  border: 1px solid #009dda;
  background-color: #ffffff;
  border: 1px solid #b2c8df;
  padding-left: 10px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.textarea`
  width: 90%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #b2c8df;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const Btn = styled.button`
  width: 10%;
  height: 100%;
  background-color: #6e85b7;
  border: 1px solid #b2c8df;
  font-size: 18px;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const MobileBtn = styled.button`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
    background-color: #6e85b7;
    border: 1px solid #b2c8df;
    font-size: 18px;
    font-weight: 600;
  }
`;
