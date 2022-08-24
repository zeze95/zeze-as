import styled from "@emotion/styled";
import { ISearchTitle } from "./BoardList.type";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    width: 95%;
  }
`;

export const TableLine = styled.div`
  border-bottom: 2px solid gray;
  margin-top: 10px;
  width: 100%;
  height: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid #dff2fc;
`;

export const Team = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #6e85b7;
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

export const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff;
`;

export const Button = styled.button`
  width: 160px;
  height: 50px;
  background-color: #b2c8df;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #6e85b7;
  }
`;

export const SearchTitle = styled.span`
  color: ${(props: ISearchTitle) => (props.isMatched ? "#7ecef4" : "black")};
`;
