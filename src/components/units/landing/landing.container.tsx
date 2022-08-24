import LandingPageUI from "./landing.presenter";
export default function LandingPage() {
  // useEffect(() => {
  //   const handleKey = (event: KeyboardEvent) => {
  //     if (event.key === "Escape" || event.key === "Enter") {
  //       window.removeEventListener("keydown", handleKey);
  //       router.push("/main");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKey);
  // }, []);

  // const [isPlus, setIstPlus] = useState(false);

  // 화면 noene 됨
  return (
    <>
      <LandingPageUI />
    </>
  );
}
