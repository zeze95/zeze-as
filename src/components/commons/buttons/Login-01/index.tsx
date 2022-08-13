import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "#efc4d0;" : "gray")};
  width: 200px;
  height: 100px;
  border: 3px solid #009dda;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
