import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9d7;
  padding: 40px 0;
  margin: 50px 0;
  gap: 1rem;
`;

export const InsideWrapper = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  @media (max-width: 991px) {
    text-align: center;
    width: 80vw;
  }
`;

export const MenuWrapper = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 991px) {
    width: 80vw;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;
export const Link = styled.a`
  width: 30%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  cursor: pointer;
  :hover {
    color: blue;
  }
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;
export const Info = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;
