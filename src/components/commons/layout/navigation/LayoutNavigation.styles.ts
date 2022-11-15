import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";
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
  @media ${breakPoints.tablet} {
    height: 50px;
    align-items: flex-start;
  }
  @media ${breakPoints.mobile} {
    height: 40px;
    align-items: flex-start;
  }
`;

export const BtnWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const MapDiv = styled.div``;

export const MenuBtn = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #f8f9d7;
  background-color: ${(props: IActive) =>
    props.isActive ? "#6e85b7" : "#ffffff"};
  color: ${(props: IActive) => (props.isActive ? "#ffffff" : "")};
  cursor: pointer;
  :hover {
    color: #ffffff;
    border: 1px solid #001d6e;
    background-color: #001d6e;
  }
  @media ${breakPoints.tablet} {
    height: 30px;
    border-radius: 10px;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 25px;
    border-radius: 10px;
    font-size: 1rem;
  }
`;
