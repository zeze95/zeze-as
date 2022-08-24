import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  placeholder?: string | undefined;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: UseFormRegisterReturn;
  maxLength?: number;
}

const Input = styled.input`
  width: 100%;
  height: 100px;
  border: 1px solid rgba(198, 211, 230, 1);
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  margin-bottom: 5px;
  ::placeholder {
    font-size: 0.875rem;
    color: rgba(198, 211, 230, 1);
    font-weight: 700px;
  }
  :focus {
    outline: none;
    /* border: 2px solid #ffd24c; */
  }
`;

export default function CommonInput(props: IInput) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props?.placeholder}
      readOnly={props.readOnly}
      defaultValue={props.defaultValue}
      maxLength={props.maxLength}
    />
  );
}
