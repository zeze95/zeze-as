import { ShopOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const TitleDiv = styled.div`
  width: 50%;
  height: 100px;
  font-weight: 700px;
  font-size: 32px;
`;

export const Pick = styled.div`
  cursor: pointer;
`;

export const RemarksWrapper = styled.div`
  width: 50%;
  font-size: 20px;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceBox = styled.div`
  width: auto;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
  border-bottom: 5px solid #6e85b7;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const TagWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-direction: center;
  align-items: center;
  color: #dbdbdb;
  gap: 10px;
`;

export const Tag = styled.div``;

export const Btn = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: skyblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 98%;
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media ${breakPoints.tablet} {
    width: 95%;
    padding: 50px;
  }

  @media ${breakPoints.mobile} {
    width: 95%;
    padding: 40px;
    border-radius: 10px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 60px;
  margin-right: 10px;
`;

export const ProfileText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const LinkWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LinkIcon = styled(ShopOutlined)`
  cursor: pointer;
`;

export const Writer = styled.div`
  width: auto;
`;

export const CreatedAt = styled.div`
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Body = styled.div`
  width: 100%;
  min-height: 500px;
  gap: 1rem;
  word-wrap: break-word;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 800;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImg = styled.img`
  width: 100%;
  margin: 10px 0;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 20px;
  gap: 2rem;
`;
export const IconWrapper = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  gap: 1rem;
`;
