import styled from "@emotion/styled";

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const TypeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  font-weight: 500;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
  border: 1px solid blue;
`;

export const ListDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  border-bottom: 1px solid black;
`;

export const ImgWrapper = styled.div`
  width: 20%;
`;
export const TitleImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleBox = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 20px;
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
  border-bottom: 1px solid blue;
`;

export const SubTitle = styled.div`
  width: 100%;
  height: 20%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: blue;
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
  width: 20%;
  height: 50%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid skyblue;
  margin: auto;
`;

export const PriceBox = styled.div``;

export const Button = styled.button`
  width: 171px;
  height: 50px;
  background-color: #b2c8df;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #6e85b7;
  }
`;

export const SideBox = styled.div`
  width: 15%;
  overflow: auto;
  position: sticky;
`;

export const SellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SellerImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const SellerName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const PickBox = styled.div``;
