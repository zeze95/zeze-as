import styled from "@emotion/styled";

interface IActive {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IActive) =>
    props.isActive ? "#7ecef4" : "#d2d2d2"};
  width: 200px;
  height: 30px;
  border: 3px solid #a0d2f2;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: black;
  font-size: 16px;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
