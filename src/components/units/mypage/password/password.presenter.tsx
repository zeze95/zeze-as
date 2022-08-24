import * as S from "./password.styles";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
interface IPasswordChangeUI {
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickChange: (data: any) => Promise<void>;
}

export default function PasswordChangeUI(props: IPasswordChangeUI) {
  return (
    <S.Wrapper>
      <S.Header>비밀번호 변경</S.Header>
      <form onSubmit={props.handleSubmit(props.onClickChange)}>
        <S.InputWrapper>
          <S.InputTitle>기존 비밀번호</S.InputTitle>
          <S.MyInputs type="text" placeholder="기존 비밀번호를 입력해주세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>새 비밀번호</S.InputTitle>
          <S.MyInputs
            type="text"
            {...props.register("password")}
            placeholder="새 비밀번호를 입력해주세요"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>새 비밀번호 확인</S.InputTitle>
          <S.MyInputs
            type="text"
            {...props.register("passwordConfirm")}
            placeholder="새 비밀번호를 확인해주세요"
          />
        </S.InputWrapper>
        <S.Footer>
          <S.Btn>비밀번호 변경</S.Btn>
        </S.Footer>
      </form>
    </S.Wrapper>
  );
}
