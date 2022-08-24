import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #dff2fc;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 10px auto;
  @media (max-width: 991px) {
    height: 40px;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding-left: 20px;
`;
