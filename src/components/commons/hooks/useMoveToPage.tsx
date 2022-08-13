import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage = (path: any) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return { onClickMoveToPage };
}
