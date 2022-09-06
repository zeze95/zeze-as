import { useQuery } from "@apollo/client";
import { getDate } from "../../../commons/libraries/utils";
import { FETCH_USED_ITEMS } from "./main.queries";
import * as Market from "./main.styles";
import Dompurify from "dompurify";
import { IMainMarketUI } from "./main.types";

export default function MainMarketUI(props: IMainMarketUI) {
  const { data } = useQuery(FETCH_USED_ITEMS);
  return (
    <Market.InWrapper>
      {data?.fetchUseditems
        .map((el: any, index: number) => (
          <Market.Item
            onClick={props.onClickMoveToPage(`markets/${el._id}`)}
            key={index}
          >
            <Market.ItemImg
              onError={event => {
                if (event.target instanceof HTMLImageElement)
                  event.target.src = "/error.png";
              }}
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
            <Market.ItemTextWrapper>
              <Market.ItemTitle> {el.name}</Market.ItemTitle>
              <Market.UserWrapper>
                <Market.UserName>
                  <Market.Text>판매자: </Market.Text>
                  {el.seller.name}
                </Market.UserName>
                <Market.AtTime>{getDate(el.createdAt)}</Market.AtTime>
              </Market.UserWrapper>

              {typeof window !== "undefined" && (
                <Market.Contents
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(el.contents.slice(0, 20)),
                  }}
                />
              )}
              <Market.Price>{el.price.toLocaleString()}원</Market.Price>
            </Market.ItemTextWrapper>
          </Market.Item>
        ))
        .slice(0, 8)}
    </Market.InWrapper>
  );
}
