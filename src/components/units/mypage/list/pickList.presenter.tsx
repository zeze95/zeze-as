import * as S from "./myPageList.stlyes";

export default function PicklistPageUI(props) {
  return (
    <>
      {props.data?.fetchUseditemsIPicked.map((el) => (
        <S.Wrapper key={el.id}>
          <S.Name onClick={props.onClickMoveToPick}>{el._id}</S.Name>
          <S.Price></S.Price>
        </S.Wrapper>
      ))}

      <S.Name>장바구니 수량 {props.basketItems.length}</S.Name>
      {props.basket.map((el) => (
        <>
          <S.Name key={el.id}>아이디 {el._id}</S.Name>
          <S.Name>제목: {el.name}</S.Name>
        </>
      ))}
    </>
  );
}
