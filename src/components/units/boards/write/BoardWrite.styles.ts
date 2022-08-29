import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";
import { ISubmitButtonProps } from "./BoardWrite.type";

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #d2d2d2;
  margin: 100px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d7e9f7;
  @media (max-width: 991px) {
    width: 90%;
    margin: 0;
    padding: 40px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
    font-size: 32px;
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const Writer = styled.input`
  width: 90%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Password = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #009dda;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: #a0d2f2;
  cursor: pointer;
  color: white;
  border: none;
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #009dda;
`;

export const Youtube = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #dff2fc;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #009dda;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  color: ${(props: ISubmitButtonProps) => (props.isActive ? "white" : "none")};

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#7ecef4" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
