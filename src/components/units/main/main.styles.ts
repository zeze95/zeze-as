import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 50px 0; */
  gap: 1rem;
  @media (max-width: 991px) {
    width: 90%;
    gap: 0.4rem;
  }
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 50px;
  font-weight: 800;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
    margin-top: 20px;
  }
`;
export const HighLighting = styled.div`
  opacity: 0.35;
  width: 500px;
  height: 2em;
  margin-top: -1.6em;
  margin-bottom: 1em;
  background-color: #6e85b7;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 1em;
    margin-top: -2.6em;
  }
`;

export const InWrapper = styled.div`
  width: 100%;
  height: auto;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 1rem; */
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Item = styled.div`
  width: 25%;
  height: 355px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  background-color: #ffffff;
  /* border-radius: 10px; */
  overflow: hidden;
  padding: 10px;
  gap: 5px;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 991px) {
    width: 50%;
    :hover {
      transform: none;
    }
  }
`;
export const ItemTextWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* font-size: 0.6rem; */
  @media (max-width: 991px) {
    height: auto;
    align-items: center;
  }
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  @media (max-width: 991px) {
    font-size: 15px;
    height: 25px;
    /* height: auto; */
  }
`;

export const UserName = styled.div`
  width: 60%;
  font-size: 16px;
  overflow: hidden;
  @media (max-width: 991px) {
    height: auto;
  }
`;
export const AtTime = styled.div`
  /* width: 100%; */
  height: 20px;
  font-size: 10px;
  font-weight: 400;
  margin-left: auto;
  @media (max-width: 991px) {
    height: auto;
  }
`;
export const Contents = styled.div`
  width: 100%;
  height: 60px;
  font-size: 16px;
  overflow: hidden;
  @media ${breakPoints.mobile} {
    height: auto;
  }
`;
export const Price = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
`;
export const Text = styled.span`
  font-size: 14px;
  @media (max-width: 991px) {
    display: none;
    font-size: 0;
  }
`;
