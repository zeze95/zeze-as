import { MutableRefObject } from "react";
import * as Mail from "./contact.styles";

interface IContactUI {
  onClicksendEmail: (e: { preventDefault: () => void }) => void;
  userInfo: {
    name: string;
    email: string;
  };
  form: MutableRefObject<HTMLFormElement>;
  onClickMoveToPage: (path: any) => () => void;
}

export default function ContactUI(props: IContactUI) {
  return (
    <Mail.Wrapper>
      <Mail.Title>개발자에게 메일보내기</Mail.Title>
      <Mail.HighLighting />
      <Mail.FormWrapper>
        <form ref={props.form} onSubmit={props.onClicksendEmail}>
          <Mail.InputTitle>이름</Mail.InputTitle>

          <Mail.UserS
            type="text"
            name="user_name"
            defaultValue={props.userInfo?.name}
            placeholder="이름을 작성해주세요"
            required
          />
          <Mail.InputTitle>이메일</Mail.InputTitle>
          <Mail.UserS
            type="email"
            name="user_email"
            defaultValue={props.userInfo?.email}
            placeholder="이메일을 작성해주세요"
            required
          />
          <Mail.InputTitle>피드백</Mail.InputTitle>
          <Mail.UserT
            name="message"
            placeholder="내용을 작성해주세요"
            required
          />

          <Mail.ButtonWrapper>
            <Mail.BackBtn onClick={props.onClickMoveToPage("main")}>
              돌아가기
            </Mail.BackBtn>

            <Mail.SubmitBtn type="submit" value="발송하기"></Mail.SubmitBtn>
          </Mail.ButtonWrapper>
        </form>
      </Mail.FormWrapper>
    </Mail.Wrapper>
  );
}
