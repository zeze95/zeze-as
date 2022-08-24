// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "@emotion/styled";

// export default class LazyLoad extends Component {
// const Wrapper = styled.div`
//   height: 300px;
//   background-image: linear-gradient(to bottom, #009dda, #dff2fc);
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
// `;

// const SliderWrapper = styled.div`
//   width: auto;
//   height: 400px;

//   overflow: hidden;
// `;

// export const ImgDiv = styled.img`
//   width: 100%;
//   height: 300px;
//   object-fit: cover;
//   background-repeat: no-repeat;
// `;
// render() {
//   const settings = {
//     dots: true,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 2,
//   };

//   const ImgDiv = styled.img`
//     height: 230px;
//     margin: auto;
//   `;
//   return (
//     <S.SliderWrapper>
//       <Slider {...props.settings}>
//         <div>
//           <S.ImgDiv src="/benner/star1.jpeg"></S.ImgDiv>
//         </div>
//         <div>
//           <S.ImgDiv src="/benner/benner.gif"></S.ImgDiv>
//         </div>
//         <div>
//           <S.ImgDiv src="/images/won/3.jpeg"></S.ImgDiv>{" "}
//         </div>
//       </Slider>
//     </S.SliderWrapper>
//   );
// }
// }
