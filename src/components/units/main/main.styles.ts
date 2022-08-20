import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

// export const Markets = styled.div`
//   width: 100%;
//   height: auto;
//   font-size: 30px;
//   display: flex;
//   flex-direction: row;
// `;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 50px;
  font-weight: 800;
  font-size: 20px;
`;
export const HighLighting = styled.div`
  opacity: 0.35;
  width: 250px;
  height: 1em;
  margin-top: -2em;
  margin-bottom: 1em;
  background-color: #6e85b7;
`;

export const InWrapper = styled.div`
  width: 100%;
  height: auto;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  overflow: hidden;
`;

export const Item = styled.div`
  width: 30%;
  height: 120px;
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
  overflow: hidden;
`;
export const ItemTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.6rem;
`;
