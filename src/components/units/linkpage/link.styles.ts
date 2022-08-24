import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 2.4rem;
  @media (max-width: 991px) {
    gap: 1.4rem;
  }
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 50px;
  font-weight: 800;
  font-size: 30px;
  @media (max-width: 991px) {
    padding-left: 3rem;
  }
`;

export const HighLighting = styled.div`
  opacity: 0.35;
  width: 13em;
  height: 1em;
  margin-top: -4em;
  margin-bottom: 1em;

  background-color: #6e85b7;
  @media (max-width: 991px) {
    margin-left: 3rem;
    margin-top: -3em;
  }
`;

export const Nation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 991px) {
    gap: 1rem;
  }
`;

export const booking = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  row-gap: 25px;
  column-gap: 20px;
  @media (max-width: 991px) {
    justify-items: center;
  }
`;

export const NationItem = styled.a`
  width: 300px;
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row; */
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.4);
  }
`;

export const bookingItem = styled.a`
  width: 280px;
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row; */
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.4);
  }
  @media (max-width: 991px) {
    width: auto;
    height: 60px;
  }
`;

export const Back = styled.img`
  width: 15vw;
  max-width: 300px;
  cursor: pointer;
`;
