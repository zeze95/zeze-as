import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;

  background-color: yellow;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

///게시판 글 




export const ProFileLineBox =styled.div`
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #BDBDBD;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`
export const TitleBox = styled.div`
    height: 160px;
    width: 100%;
    text-align: left;
    padding-top: 80px;
    
`
export const ImgContentsBox = styled.div`
    height: 480px;
    width: 100%;
   
`

export const ContentsBox = styled.div`
    height: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `

export const textBox=styled.div`
    width: 100%;
    
`

export const YoutubeImg = styled.img`
    width: 486px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
   
    padding: 0px;
`

export const LikeBox = styled.div`
    width: 120px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  

`

export const ProfileBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-right: auto;

`

export const IconBox =styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-left: auto;
  align-items: center;
  justify-content: space-around;

`
export const ProfileImg =styled.img`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageBox =styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
`

export const DetailName =styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;
`
export const UserName =styled.div`
  width: 100%;
  height: 50%;
`

export const CreateDate =styled.div`
  width: 100%;
  height: 50%;
`

export const LinkIcon=styled.img`
  width: 27px;
  height: 14px;
  display: flex;
  align-items: center;
`

export const MapIcon=styled.img`
  width: 19px;
  height: 28px;
`


export const LikeDiv=styled.div`
  width: 25px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-content: space-between;

`

export const LikeIcon=styled.img`
  width: 100%;
  height: 18px;
  display:flex;
  justify-content:flex-start ;
`

export const LikeCount=styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: flex-end;
`