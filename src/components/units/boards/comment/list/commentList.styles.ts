import styled from "@emotion/styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #daeaf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
  }
`;
export const ListHeader = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 24px;
  margin: 20px;
  padding: 10px;
  border-bottom: 3px solid black;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const Star = styled.div`
  width: 200px;
  height: 100%;
`;

export const UpdateIcon = styled(EditOutlined)`
  font-size: 14px;
  cursor: pointer;
`;
export const DeleteIcon = styled(DeleteOutlined)`
  font-size: 14px;
  cursor: pointer;
`;

export const Password = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const CommentWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  flex-direction: row;
  padding: 0 3%;
  gap: 1rem;
`;
export const UserSection = styled.section`
  width: 80px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;
export const LineDiv = styled.div`
  width: 10px;
  height: 100px;
  border-right: 1px solid #d2d2d2;
  margin: auto 0;
`;
export const ContentsSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const IconSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: flex-end; */
`;

export const TextSection = styled.section`
  width: 100%;
  height: auto;
`;

export const UserImg = styled.img`
  width: 50px;
  background-color: white;
  border-radius: 50px;
`;

export const BtnWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1rem;
`;

export const Btn = styled.span`
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: navy;
  }
`;

export const CommentUser = styled.span`
  font-size: 20px;
  font-weight: 800;
  margin-right: 20px;
  margin-left: 20px;
`;

export const CommentDate = styled.span`
  color: gray;
  margin-right: 10px;
  margin-left: auto;
`;

export const CommentContents = styled.div`
  width: 100%;
  height: auto;
  min-height: 25px;
  margin: 10px 5px;
`;

export const CommentFooter = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
