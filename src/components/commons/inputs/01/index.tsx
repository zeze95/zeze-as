import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";
const LoginInput = styled.input`
  width: 400px;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #c4ddff;
  padding-left: 15px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export default function Input01(props) {
  return (
    <LoginInput
      type={props.type}
      {...props.register}
      onChange={props.onChange}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
}
