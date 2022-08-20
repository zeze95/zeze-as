import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom, #6e85b7, #dff2fc);
  display: flex;
  flex-direction: row;
`;

export const MySlider = styled(Slider)`
  width: 100%;
  height: 400px;
  display: flex;
`;

export const SliderDiv = styled.div`
  height: 400px;
  overflow: hidden;
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
`;
