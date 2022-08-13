import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-image: linear-gradient(to right, #009dda, #a0d2f2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid #a0d2f2;
`;

export const MarginBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const LogoMain = styled.div`
  margin: 0px 22px;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 100%;
`;

export const HeaderImg = styled.img`
  width: 40px;
  height: 60px;
`;

export const Btn = styled.span`
  width: 110px;
  height: 40px;
  background-color: #bae3f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #7ecef4;
  cursor: pointer;
  font-size: 18px;
  padding-left: 5px;
`;

export const BtnA = styled.span`
  width: 160px;
  height: 40px;
  background-color: #bae3f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #7ecef4;
  cursor: pointer;
  font-size: 18px;
  padding-left: 5px;
`;
