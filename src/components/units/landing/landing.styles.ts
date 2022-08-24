import styled from "@emotion/styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: url("/landing/31.png") center/cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
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
  @media ${breakPoints.mobile} {
    width: 150px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 3rem;
  }
`;

export const ParalWrapper = styled(Parallax)`
  /* -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
  overflow-x: hidden; */
`;
export const Layer1 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media ${breakPoints.mobile} {
    width: 100%;
    object-fit: none;
  }
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
  background-size: center/cover;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const LayerImg1 = styled.div`
  /* position: absolute;
  background-size: center/cover;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 10; */
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/landing/to.png");
`;

export const LayerImg2 = styled.div`
  /* position: absolute;
  background-size: center/cover;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 10; */
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/landing/board.png");
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
