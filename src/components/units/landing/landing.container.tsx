import { useRef } from "react";
import { useRouter } from "next/router";
import LandingPageUI from "./landing.presenter";
import { useEffect } from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
export default function LandingPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  // useEffect(() => {
  //   const handleKey = (event: KeyboardEvent) => {
  //     if (event.key === "Escape" || event.key === "Enter") {
  //       window.removeEventListener("keydown", handleKey);
  //       router.push("/main");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKey);
  // }, []);

  const onClickImage = () => {
    fileRef.current?.click();
  };
  const onClickMoveTopage = (Page: string) => {
    onClickMoveToPage(Page)();
  };
  // const [isPlus, setIstPlus] = useState(false);

  // 화면 noene 됨
  return (
    <>
      <LandingPageUI
        onClickImage={onClickImage}
        fileRef={fileRef}
        onClickMoveToPage={onClickMoveToPage}
      />
    </>
  );
}
