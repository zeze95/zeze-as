import styled from "@emotion/styled";
interface IisActive {
  isActive: boolean;
}
export const Wrapper = styled.div`
  width: 1250px;
  margin: 50px;
  display: flex;
  flex-direction: row;
  padding: 25px;
  border: 3px solid #6e85b7;
  border-radius: 20px;
  background-color: #6e85b7;
`;

export const SideWrapper = styled.div`
  width: 20%;
  height: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid gray; */
`;
export const InfoWrapper = styled.div`
  width: 95%;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #6e85b7;
  background-color: #ffffff;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 20px 0 0 0;
`;

export const SideHeader = styled.div`
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding: 8px;
`;
export const MyImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px auto;
`;

export const MyName = styled.div`
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  padding-top: 5px;
  margin-bottom: 20px;
`;
export const MyText = styled.div`
  width: 90%;
  height: 50px;
  text-align: center;
  border-top: 1px solid #d2d2d2;
  padding: 5px 0;
`;
export const MyPoint = styled.div`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const SideMenuWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideMenu = styled.div`
  width: 100%;
  height: ${(props: IisActive) => (props.isActive ? "100px" : "60px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: ${(props: IisActive) => (props.isActive ? "800" : "600")};
  color: ${(props: IisActive) => (props.isActive ? "#ffffff" : "black")};
  margin: ${(props: IisActive) => (props.isActive ? "0" : "5px 0")};
  background-color: ${(props: IisActive) =>
    props.isActive ? "#243A73" : "#ffffff"};
  border: 3px solid
    ${(props: IisActive) => (props.isActive ? "#243A73" : "#d2d2d2")};
  border-right: none;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
`;
export const SideMenuText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  font-size: ${(props: IisActive) => (props.isActive ? "22px" : "16px")};
  border-radius: 10px 0 0 10px;
`;

export const ListWrapeer = styled.div`
  width: 80%;
  height: 740px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid #6e85b7;
  border-radius: 0 10px 10px 0;
  background-color: #ffffff;
`;
