import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 80px 120px;
`;

export const Header = styled.div`
  width: 100%;
  font-weight: 800;
  font-size: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d2d2d2;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const InputTitle = styled.div`
  width: 100px;
`;

export const MyInputs = styled.input`
  width: 500px;
  height: 100%;
  padding-left: 10px;
  border: none;
  background-color: #e0e0e0;
  color: #bdbdbd;
`;
export const Footer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Btn = styled.button`
  width: 180px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  cursor: pointer;
`;
