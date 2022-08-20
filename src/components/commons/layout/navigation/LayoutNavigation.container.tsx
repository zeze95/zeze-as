import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useState, useEffect } from "react";

export default function LayoutNavigation() {
  const router = useRouter();

  const [isActive, setIsActive] = useState<string | null>(null);
  useEffect(() => {
    setIsActive(`/${router.asPath.split("/")[1]}`);
  }, [router]);
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);
      setIsActive(event.target.id);
    }
  };

  const menuList = [
    { name: "자유게시판", page: "/boards" },
    { name: "구매 장터", page: "/markets" },
    { name: "참고 사이트", page: "/sitelink" },
    { name: "고객 센터", page: "/contact" },
  ];

  return (
    <>
      <LayoutNavigationUI
        onClickMenu={onClickMenu}
        menuList={menuList}
        isActive={isActive}
      />
    </>
  );
}
