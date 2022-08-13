import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListHeader = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 24px;
  margin: 20px;
  padding: 10px;
  border-bottom: 3px solid black;
`;

export const CommentWrapper = styled.div`
  width: 90%;
  padding-left: 30px;
  margin: 0 auto;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 20px;
`;

export const UserSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 30px;
  background-color: white;
  border-radius: 50px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-left: 20px;
`;

export const Btn = styled.span`
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const CommentUser = styled.span`
  font-size: 18px;
  font-weight: 800;
  margin-right: 20px;
  margin-left: 20px;
`;

export const CommentDate = styled.span`
  color: gray;
  margin-right: 10px;
`;

export const CommentContents = styled.div`
  width: 100%;
  min-height: 20px;
  margin: 10px 5px;
`;

export const CommentFooter = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 30px;
  /* border-left: 1px solid #d2d2d2; */
`;

export const AnswerImg = styled.img`
  width: 30px;
  background-color: white;
  border-radius: 50px;
`;
