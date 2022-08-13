import styled from "@emotion/styled";
interface IisActive {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  width: 100px;
`;
export const Price = styled.div`
  width: 100px;
`;

export const SideMenu = styled.div`
  border: ${(props: IisActive) => (props.isActive ? "#f4f4f4" : "#ffffff")};
`;
