import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./main.queries";
import * as Board from "./main.styles";
import Dompurify from "dompurify";
import { getDate } from "../../../commons/libraries/utils";
export default function MainboardUI(props) {
  const { data } = useQuery(FETCH_BOARDS);
  // console.log(data.fetchBoards);
  return (
    <Board.InWrapper>
      {data?.fetchBoards
        .map((el: any, index: number) => (
          <Board.Item
            onClick={props.onClickMoveToPage(`boards/${el._id}`)}
            key={index}
          >
            <Board.ItemImg
              onError={event => {
                if (event.target instanceof HTMLImageElement)
                  event.target.src = "/error.png";
              }}
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
            <Board.ItemTextWrapper>
              <div>{el.title}</div>
              <Board.UserWrapper>
                <div>{getDate(el.createdAt)}</div>
                <div>{el.writer}</div>
              </Board.UserWrapper>

              {typeof window !== "undefined" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(el.contents.slice(0, 20)),
                  }}
                />
              )}
            </Board.ItemTextWrapper>
          </Board.Item>
        ))
        .slice(0, 9)}
    </Board.InWrapper>
  );
}
