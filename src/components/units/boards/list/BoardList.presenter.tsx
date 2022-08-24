import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.type";
import Paginations01 from "../../.././commons/paginations/01/Paginations01.container";
import Searchbar from "../../../commons/searchbars/01/Searchbars.container";
import { v4 as uuidv4 } from "uuid";

// 프롭스 타입
// El 타입

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Top>
        <Searchbar
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <S.Button onClick={props.onClickMoveToBoardNew}>게시물 등록</S.Button>
      </S.Top>
      <S.TableLine />
      <S.Team>
        {/* <S.HeaderFixTen>글번호</S.HeaderFixTen> */}
        <S.HeaderFixName>날짜</S.HeaderFixName>
        <S.HeaderTitle>제목</S.HeaderTitle>
        <S.HeaderFixName>작성자</S.HeaderFixName>
      </S.Team>
      {props.data?.fetchBoards.map((el: any) => (
        <S.Team key={el._id}>
          {/* <S.FixTen> */}
          {/* {String(el._id).slice(-4).toUpperCase()} */}
          {/* {`${props.count-}`} */}
          {/* </S.FixTen> */}
          <S.FixName>{getDate(el.createdAt)}</S.FixName>
          <S.TitleList id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el: any) => (
                <S.SearchTitle key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.SearchTitle>
              ))}
          </S.TitleList>
          <S.FixName>{el.writer}</S.FixName>
        </S.Team>
      ))}

      <S.TableBottom />
      <Paginations01 refetch={props.refetch} count={props.count} />
    </S.Wrapper>
  );
}
