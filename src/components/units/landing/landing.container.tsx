import { useRef } from "react";
import { useRouter } from "next/router";
import LandingPageUI from "./landing.presenter";

export default function LandingPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onClickMove = () => {
    router.push("/main");
  };
  // const [isPlus, setIstPlus] = useState(false);

  // 화면 noene 됨
  return (
    <>
      <LandingPageUI
        onClickImage={onClickImage}
        onClickMove={onClickMove}
        fileRef={fileRef}
      />
    </>
  );
}
