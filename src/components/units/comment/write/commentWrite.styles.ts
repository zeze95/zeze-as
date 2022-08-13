import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const TextBox = styled.input`
  width: 180px;
  height: 55px;
  padding-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #009dda;
`;
export const RateBox = styled.div`
  align-items: center;
  padding-bottom: 15px;
`;

export const ContentsBox = styled.div`
  border: 1px solid #7ecef4;
  width: 100%;
`;
export const Contents = styled.textarea`
  width: 100%;
  min-height: 110px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #7ecef4;
`;

export const BottomBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dff2fc;
`;

export const limit = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: #009dda;
`;

export const Button = styled.button`
  width: 100px;
  background-color: #7ecef4;
  border: none;
  color: black;
  text-align: center;
  cursor: pointer;
`;
