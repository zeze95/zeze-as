import * as S from "./SignUp.styles";
import Input01 from "../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";
import { ISignUI } from "./SignUp.types";

export default function SignUI(props: ISignUI) {
  return (
    <>
      <S.Wrapper>
        <S.InsideBox>
          <S.Header>Sign Up Page</S.Header>
          <S.HighLighting />
          <S.LineDiv />
          <S.MyForm onSubmit={props.handleSubmit(props.onClickSign)}>
            <S.InputWrapper>
              이름
              <Input01
                placeholder="이름을 입력하세요"
                type="text"
                register={props.register("name")}
              ></Input01>
              <S.Error>{props.formState.errors.name?.message}</S.Error>
              아이디
              <Input01
                placeholder="아이디를 입력하세요"
                type="text"
                register={props.register("email")}
              />
              <S.Error>{props.formState.errors.email?.message}</S.Error>
              비밀번호
              <Input01
                placeholder="비밀번호를 입력하세요"
                type="password"
                register={props.register("password")}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
              비밀번호 재확인
              <Input01
                placeholder="비밀번호를 다시 한번 입력하세요"
                type="password"
                register={props.register("passwordConfirm")}
              />
              <S.Error>
                {props.formState.errors.passwordConfirm?.message}
              </S.Error>
              <S.LineDiv />
              <Button01
                isActive={props.formState.isValid}
                title=" Sign in"
              ></Button01>
            </S.InputWrapper>
          </S.MyForm>
        </S.InsideBox>
      </S.Wrapper>
    </>
  );
}
