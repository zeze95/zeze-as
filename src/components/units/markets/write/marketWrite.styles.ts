import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { breakPoints } from "../../../../../styles/media";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface ISubmitButtonProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: #dff2fc;
  border-radius: 15px;
  @media (max-width: 991px) {
    padding: 25px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;
export const MyForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TagContents = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const TagInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #7ecdf4;
  padding-left: 10px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  width: 50%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const AdresseWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const MapWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const ZipcodeWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const ZipcodeHead = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 90%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #009dda;
  /* border-radius: 10px; */
`;

export const SearchButton = styled.div`
  width: 120px;
  height: 52px;
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0d2f2;
  cursor: pointer;
  /* color: white; */
  /* border: 1px solid navy; */
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border-radius: 15px;
  border: 1px solid #009dda;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const MyQuill = styled(ReactQuill)`
  width: 100%;
  height: 300px;
`;
