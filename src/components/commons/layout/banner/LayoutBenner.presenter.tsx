import * as S from "./LayoutBenner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(props) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.ImgBox></S.ImgBox>
      </S.ImageWrapper>
      <S.TextWrapper></S.TextWrapper>
    </S.Wrapper>
  );
}
