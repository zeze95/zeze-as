import * as S from "./LayoutBenner.styles";

export default function LayoutBannerUI(props) {
  return (
    <S.Wrapper>
      <S.MySlider {...props.settings}>
        <S.SliderDiv>
          <S.SliderImg src="/banner/001.png" />
        </S.SliderDiv>
        <S.SliderDiv>
          <S.SliderImg src="/banner/002.png" />
        </S.SliderDiv>
        <S.SliderDiv>
          <S.SliderImg src="/banner/003.png" />
        </S.SliderDiv>
        <S.SliderDiv>
          <S.SliderImg src="/banner/004.png" />
        </S.SliderDiv>
        {/* <S.SliderDiv>
          <S.SliderImg src="/banner/005.png" />
        </S.SliderDiv> */}
        <S.SliderDiv>
          <S.SliderImg src="/banner/006.png" />
        </S.SliderDiv>
      </S.MySlider>
    </S.Wrapper>
  );
}
