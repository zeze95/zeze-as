import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BtnWrapper>
          {props.menuList.map((el: any) => (
            <S.MapDiv key={el.page}>
              <S.MenuBtn
                id={el.page}
                onClick={props.onClickMenu}
                isActive={props.isActive === `${el.page}`}
              >
                {el.name}
              </S.MenuBtn>
            </S.MapDiv>
          ))}
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
