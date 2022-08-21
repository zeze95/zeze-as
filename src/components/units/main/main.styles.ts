import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 50px 0; */
  gap: 1rem;
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
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const HighLighting = styled.div`
  opacity: 0.35;
  width: 500px;
  height: 2em;
  margin-top: -1.6em;
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
  /* gap: 1rem; */
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const Item = styled.div`
  width: 20%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
  /* border-radius: 10px; */
  overflow: hidden;
  padding: 10px;
  gap: 1rem;
`;
export const ItemTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* font-size: 0.6rem; */
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 22px;
  font-size: 20px;
  font-weight: 600;
`;

export const UserName = styled.div`
  /* width: 60%; */
  height: 20px;
  font-size: 16px;
`;
export const AtTime = styled.div`
  /* width: 100%; */
  height: 20px;
  font-size: 10px;
  font-weight: 400;
  margin-left: auto;
`;
export const Contents = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
`;
export const Price = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
