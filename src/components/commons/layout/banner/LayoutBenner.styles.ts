import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(to bottom, #a0d2f2, #b2c8df);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const MySlider = styled(Slider)`
  width: 100%;
  height: auto;
`;

export const SliderDiv = styled.div``;

export const SliderImg = styled.img`
  width: 100%;
  height: auto;
`;
