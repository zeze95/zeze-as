import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    width: 95%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  @media ${breakPoints.tablet} {
    top: 11vh;
    border: none;
  }
  @media ${breakPoints.mobile} {
    top: 80px;
    border: none;
  }
`;

// export const TypeBtn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100px;
//   height: 50px;
//   font-weight: 500;
//   font-size: 18px;
//   :hover {
//     cursor: pointer;
//   }
//   border: 1px solid blue;
// `;

export const ListDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  border-bottom: 1px solid black;
  @media (max-width: 991px) {
    width: 95%;
    margin: auto;
  }
`;

export const TitleImg = styled.img`
  width: 20%;
  height: 100%;
  :hover {
    transform: scale(1.1);
  }
`;

export const TitleBox = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Title = styled.div`
  width: 100%;
  height: 30%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* border-bottom: 1px solid #6e85b7; */
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 20%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const TagTitle = styled.div`
  width: 100%;
  height: 20%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const RWrapper = styled.div`
  width: 100%;
  height: 30%;
  font-weight: 600;
  font-size: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* border-bottom: 5px double #6e85b7; */
  /* margin: auto; */
`;

export const PriceBox = styled.div``;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  background-color: #b2c8df;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #6e85b7;
  }
  @media (max-width: 991px) {
    height: 40px;
  }
`;

export const SideBox = styled.div`
  width: 15%;
  overflow: auto;
  position: sticky;
`;

export const SellerWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-left: 1px solid #d2d2d2;
`;

export const SellerImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const SellerName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const CreatAt = styled.div`
  font-size: 12px;
`;
export const PickBox = styled.div``;
