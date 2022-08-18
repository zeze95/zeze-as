import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`;

export const RandingPage = styled.img`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(/images/main/mains.jpeg);

  position: absolute;
  background-size: cover;
  z-index: 0;
`;

export const Btn = styled.button`
  display: none;
`;

export const TextBox = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: silver;
  position: absolute;
  z-index: 5;
  bottom: 70%;
  right: 15%;
  font-size: 35px;
  border: 1px solid white;
  border-radius: 30px;
  animation: blink-effect 1s step-end infinite;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
  cursor: pointer;
  :hover {
    width: 350px;
    height: 120px;
    background-color: #a0afff;
    color: white;

    animation-name: shake;
    animation-duration: 1s;
    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-8deg);
      }
      50% {
        transform: rotate(8deg);
      }
      75% {
        transform: rotate(-8deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
