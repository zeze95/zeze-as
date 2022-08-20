import styled from "@emotion/styled";

interface IActive {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IActive) =>
    props.isActive ? "#B2C8DF" : "#C4D7E0"};
  width: 200px;
  height: 40px;
  border: 3px solid #6e85b7;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
