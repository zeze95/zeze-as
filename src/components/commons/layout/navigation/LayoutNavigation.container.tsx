import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function LayoutNavigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };
  const toggleMenu = () => {
    setIsOpen(prev => !prev); // on,off 개념 boolean
  };
  const menuList = [
    { name: "자유게시판", page: "/boards" },
    { name: "구매 장터", page: "/markets" },
    { name: "참고 사이트", page: "/sitelink" },
    { name: "고객 센터", page: "/help" },
  ];

  return (
    <>
      <LayoutNavigationUI onClickMenu={onClickMenu} menuList={menuList} />
    </>
  );
}
