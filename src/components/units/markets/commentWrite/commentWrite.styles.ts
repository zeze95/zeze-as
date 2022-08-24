import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px 5%;
  background-color: #daeaf1;
  border-radius: 3px;
  /* border: 1px solid #7c83fd; */
`;

export const UserName = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
`;

export const UserInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  resize: none;
  background-color: #ffffff;
  padding: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 100%;
`;

export const Btn = styled.button`
  width: 100px;
  height: 35px;
  /* background-color: transparent; */
  background-color: transparent;
  border: none;
  /* border-radius: 10px; */
  cursor: pointer;
`;
