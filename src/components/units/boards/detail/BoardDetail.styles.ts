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
  /* box-shadow: 0px 0px 10px gray; */
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

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ProfileImg = styled.img`
  margin-right: 10px;
`;

export const ProfileText = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  width: 100px;
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
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const UploadImg = styled.img`
  width: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
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
  width: 179px;
  height: 45px;
  background-color: #009dda;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

import ReactPlayer from "react-player";

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;
