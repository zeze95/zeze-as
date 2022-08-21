import { ChangeEvent } from "react";
import _ from "lodash";

import SearchbarUI from "./Searchbars.presenter";

export default function Searchbar(props: any) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    // props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.currentTarget.value);
  }

  return <SearchbarUI onChangeSearchbar={onChangeSearchbar} />;
}
