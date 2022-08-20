import styled from "@emotion/styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Wrapper = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start; */

  width: 100vw;
  height: 100vh;
  /* 
  left: calc(-50vw + 50%); */
  background: url("/landing/31.png");
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
  position: relative;
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: silver;
  position: absolute;
  z-index: 10;
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
    color: white;
    border: 3px solid white;
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

export const ParalWrapper = styled(Parallax)`
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
  overflow-x: hidden;
`;
export const Layer1 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100vw;
  height: 100vh;
`;

export const Layer2 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
export const Layer3 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100vw;
  height: 100vh;
`;

export const LayerImg = styled.img`
  position: absolute;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const Text = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: silver;
  position: absolute;
  z-index: 5;
`;
