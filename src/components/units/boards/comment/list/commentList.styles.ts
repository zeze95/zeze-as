import styled from "@emotion/styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  height: 111px;
  display: flex;
  flex-direction: row;
  margin: 10px 100px;
  border-bottom: 1px solid #009dda;
  align-items: center;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const ProfileDiv = styled.div`
  width: 50px;
  height: 100%;
`;

export const ProfileImg = styled.img`
  padding-top: 5px;
  width: 40px;
  height: 45px;
  align-items: flex-start;
`;

export const WriterWrapper = styled.div`
  width: 1150px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderDiv = styled.div`
  width: 1150px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Contents = styled.div`
  width: 1100px;
  height: 60px;
  font-size: 16px;
  color: #4f4f4f;
`;

export const CreateDate = styled.div`
  width: 100%;
  height: 100%;
  color: #bdbdbd;
  font-size: 12px;
`;

export const WriterName = styled.div`
  width: 100px;
  height: 100%;
  font-size: 16px;
`;

export const Star = styled.div`
  width: 200px;
  height: 100%;
`;

export const Align = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconDiv = styled.div`
  width: 50px;
  justify-content: flex-end;
`;

export const UpdateIcon = styled(EditOutlined)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const DeleteIcon = styled(DeleteOutlined)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Scroller = styled.div``;

export const Password = styled.input`
  width: 100%;
  margin-top: 10px;
`;
