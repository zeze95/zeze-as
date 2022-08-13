import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px;
`;
export const MainWrapper = styled.div`
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0px 0px 10px gray; */
  text-align: center;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const TitleDiv = styled.div`
  width: 50%;
  height: 100px;
  font-weight: 700px;
  font-size: 32px;
`;
export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const ProfileWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const ProfileImg = styled.img`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const UserWrapper = styled.div`
  padding-left: 20px;
`;
export const ProfileName = styled.div`
  width: 100%;
  height: 60%;
  font-size: 16px;
  font-weight: 500;
`;
export const CreateTime = styled.div`
  height: 40%;
  color: #dbdbdb;
`;
export const IconWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
`;
export const LinkIcon = styled.img`
  margin: auto;
  cursor: pointer;
`;
export const Pick = styled.div`
  margin: auto;
  cursor: pointer;
`;
export const Body = styled.div`
  width: 100%;
  min-height: 500px;
`;

export const RemarksWrapper = styled.div`
  width: 80%;
  font-size: 20px;

  margin: 20px 0px;
`;

export const PriceBox = styled.div`
  width: 50%;
  font-size: 32px;
  font-weight: 500;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 5px double skyblue;
`;
export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const TagWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: center;
  align-items: center;
  color: #dbdbdb;
`;
export const BtnWrapper = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
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
export const UploadImg = styled.img`
  width: 100%;
`;
