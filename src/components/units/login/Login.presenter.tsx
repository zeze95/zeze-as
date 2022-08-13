import * as S from "./Login.styles";
import Input01 from "../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";

export default function LoginPageUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.InsideBox>
          <S.Header>Login Page</S.Header>
          <S.LineDiv />
          <form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.InputWrapper>
              이메일
              <Input01
                placeholder="이메일을 입력하세요"
                type="text"
                register={props.register("email")}
                defaultValue="q@q.com"
              ></Input01>
              <S.Error>{props.formState.errors.email?.message}</S.Error>
              비밀번호
              <Input01
                placeholder="비밀번호를 입력하세요"
                type="password"
                register={props.register("password")}
                defaultValue="!123123123"
              ></Input01>
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.InputWrapper>
            <S.LineDiv />
            <Button01
              isActive={props.formState.isValid}
              title=" Sign in"
            ></Button01>
          </form>
        </S.InsideBox>
      </S.Wrapper>
    </>
  );
}
