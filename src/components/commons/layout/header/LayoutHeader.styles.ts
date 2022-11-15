import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  /* background-image: linear-gradient(to right, #6e85b7, #c4d7e0); */
  background-color: #6e85b7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const MarginBox = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  @media ${breakPoints.mobile} {
    width: 150px;
  }
`;

export const LogoMain = styled.div`
  margin: 0px 22px;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 100%;
  @media ${breakPoints.mobile} {
    width: 40px;
  }
`;

export const HeaderImg = styled.img`
  width: 35px;
  height: 35px;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const Btn = styled.span`
  width: 90px;
  height: 30px;
  background-color: #f8f9d7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #7ecef4;
  cursor: pointer;
  font-size: 14px;
  @media ${breakPoints.tablet} {
    width: 70px;
    padding-left: 0px;
  }
  @media ${breakPoints.mobile} {
    width: 60px;
    height: 25px;
    font-size: 10px;
    padding-left: 0px;
  }
`;
