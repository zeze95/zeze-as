import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 300px;
  background-image: linear-gradient(to bottom, #009dda, #dff2fc);
  display: flex;
  flex-direction: row;
  padding: 0px 10%;
`;

// export const SliderWrapper = styled.div`
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
export const ImageWrapper = styled.div`
  width: 40%;
  overflow: hidden;
`;

export const ImgBox = styled.img`
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 10%)
    url("/benner/star1.jpeg");
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  width: 60%;
  height: 100%;
  color: white;
  border: 1px solid black;
`;
