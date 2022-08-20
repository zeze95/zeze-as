import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 70%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  border: 3px solid #6e85b7;
  border-radius: 20px;
  background-color: #ffffff;
`;
export const Title = styled.div`
  width: 100%;
  height: 20%;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
`;
export const InputTitle = styled.div`
  width: 100%;
  margin: 15px 5px;
  height: 20px;
`;
export const UserS = styled.input`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #d2d2d2;
`;
export const UserT = styled.textarea`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
`;
export const SubmitBtn = styled.input`
  width: 100px;
  height: 40px;
  background-color: #6e85b7;
  border: none;
  border-radius: 5px;
`;
export const BackBtn = styled.div`
  width: 100px;
  height: 40px;
  background-color: #c4d7e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
