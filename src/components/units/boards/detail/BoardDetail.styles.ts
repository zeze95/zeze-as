import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const MainWrapper = styled.div`
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
`;

export const LinkWrapper = styled.div`
  width: 10%;
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const LinkIcon = styled.img`
  margin: auto;
  cursor: pointer;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 500px;
  gap: 1rem;
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
  padding-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
  gap: 2rem;
`;
export const IconWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
`;
export const IconBox = styled.div`
  width: 70px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const IconImg = styled.img`
  width: 22px;
  height: 20px;
  cursor: pointer;
`;

export const IconCount = styled.div`
  border-radius: 10px;
  width: 50px;
  border: 1px solid #009dda;
  font-size: 14px;
  color: blue;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  background-color: #7ecef4;
  border: 1px solid #f8f9d7;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #f8f9d7;
  }
`;

import ReactPlayer from "react-player";

export const Youtube = styled(ReactPlayer)``;
