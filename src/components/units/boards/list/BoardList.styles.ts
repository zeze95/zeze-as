import styled from "@emotion/styled";
import { ISearchTitle } from "./BoardList.type";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px;
`;

export const TableLine = styled.div`
  border-top: 2px solid gray;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #dff2fc;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #009dda;

  :hover {
    color: red;
  }
`;

export const HeaderFixTen = styled.div`
  width: 10%;
  text-align: center;
`;

export const HeaderFixName = styled.div`
  width: 20%;
  text-align: center;
`;

export const HeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const FixTen = styled.div`
  width: 10%;
  text-align: center;
`;

export const FixName = styled.div`
  width: 20%;
  text-align: center;
`;

export const TitleList = styled.div`
  width: 70%;
  text-align: center;

  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  margin: 0px 10px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: #dffefc;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
  border-color: silver;
  :hover {
    background-color: #a0d2f2;
  }
`;

export const SearchTitle = styled.span`
  color: ${(props: ISearchTitle) => (props.isMatched ? "#7ecef4" : "black")};
`;
