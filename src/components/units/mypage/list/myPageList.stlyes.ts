import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-weight: 800;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d2d2d2;
  gap: 1rem;
  @media (max-width: 991px) {
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #d2d2d2;
  gap: 1rem;
  font-weight: 700;
`;

export const HeaderName = styled.div`
  width: 20%;
  overflow: hidden;
  font-size: 20px;
  @media (max-width: 991px) {
    width: 30%;
    font-size: 16px;
  }
`;
export const HeaderPrice = styled.div`
  width: 15%;
  font-size: 20px;
  @media (max-width: 991px) {
    width: 20%;
    font-size: 16px;
  }
`;
export const HeaderRemarks = styled.div`
  width: 40%;
  font-size: 20px;
  @media (max-width: 991px) {
    display: none;
    font-size: 16px;
  }
`;
export const HeaderSeller = styled.div`
  width: 10%;
  font-size: 20px;
  @media (max-width: 991px) {
    width: 20%;
    font-size: 16px;
  }
`;
export const HeaderCreateTime = styled.div`
  width: 15%;
  font-size: 20px;
  @media (max-width: 991px) {
    width: 30%;
    font-size: 16px;
  }
`;

export const Name = styled.div`
  width: 20%;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 30%;
  }
`;
export const Price = styled.div`
  width: 15%;
  @media (max-width: 991px) {
    width: 20%;
  }
`;
export const Remarks = styled.div`
  width: 40%;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const Seller = styled.div`
  width: 10%;
  @media (max-width: 991px) {
    width: 20%;
  }
`;
export const CreateTime = styled.div`
  width: 15%;
  @media (max-width: 991px) {
    width: 30%;
  }
`;
// export const SideMenu = styled.div`
//   border: ${(props: IisActive) => (props.isActive ? "#f4f4f4" : "#ffffff")};
// `;
