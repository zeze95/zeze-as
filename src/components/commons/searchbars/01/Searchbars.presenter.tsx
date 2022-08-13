import { Searchbar, SearchbarInput } from "./Searchbars.styles";
// import { ISearchbarsUIProps } from "./Searchbars.types";

export default function SearchbarUI(props: any) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
