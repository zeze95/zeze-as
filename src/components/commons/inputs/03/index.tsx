import styled from "@emotion/styled";

const Input = styled.input`
  width: 400px;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #7ecdf4;
  padding-left: 10px;
`;

export default function Input03(props) {
  return (
    <Input
      type={props.type}
      {...props.register}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
