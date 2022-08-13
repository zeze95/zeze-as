import * as S from "./SignUp.styles";
import Input01 from "../../commons/inputs/01";
import Button01 from "../../../commons/buttons/01";

export default function SignUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.InsideBox>
          <S.Header>Sign Up Page</S.Header>
          <S.LineDiv />

          <form onSubmit={props.handleSubmit(props.onClickSign)}>
            <S.InputDiv>
              이름
              <Input01 type="text" register={props.register("name")} />
            </S.InputDiv>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.InputDiv>
              아이디
              <Input01 type="text" register={props.register("email")} />
            </S.InputDiv>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <S.InputDiv>
              비밀번호
              <Input01 type="password" register={props.register("password")} />
            </S.InputDiv>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.InputDiv>
              비밀번호 재확인
              <Input01
                type="password"
                register={props.register("passwordConfirm")}
              />
            </S.InputDiv>
            <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error>
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
