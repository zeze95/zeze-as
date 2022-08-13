import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #7c83fd;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const UserInput = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  resize: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Btn = styled.button`
  width: 100px;
  height: 35px;
  color: #96baff;
  /* background-color: transparent; */
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
