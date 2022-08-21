import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  font-size: ${(props: IPageProps) => (props.isActive ? "18px" : "14px")};
  color: ${(props: IPageProps) => (props.isActive ? "#6e85b7" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const Wrapper = styled.div`
  margin-right: auto;
`;
