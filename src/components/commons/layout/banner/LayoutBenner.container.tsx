import LayoutBannerUI from "./LayoutBenner.presenter";
export default function LayoutBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <LayoutBannerUI settings={settings} />;
}
