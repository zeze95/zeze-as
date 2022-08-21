import LinkPageUI from "./link.presenter";

export default function LinkPage() {
  const nation = [
    {
      name: "코레일",
      page: "http://co.korailtravel.com/",
      image: "/linklogo/korail.png",
    },
    // {
    //   name: "한국 관광공사",
    //   page: "http://www.visitkorea.or.kr",
    //   image: "/linklogo/Korea_tourism_organization.jpeg",
    // },
    {
      name: "대한민국 구석구석",
      page: "https://korean.visitkorea.or.kr",
      image: "/linklogo/logo_summer.png",
    },
  ];
  const booking = [
    // { name: "고속버스 통합예매", page: "https://www.kobus.co.kr", image: "" },
    // {
    //   name: "시외버스 통합예매",
    //   page: "https://www.bustago.or.kr",
    //   image: "",
    // },
    {
      name: "야놀자",
      page: "https://www.yanolja.com/",
      image: "/linklogo/yanolja.jpeg",
    },
    {
      name: "여기어때",
      page: "https://www.goodchoice.kr/",
      image: "/linklogo/yeogi.jpeg",
    },
    {
      name: "아고다",
      page: "https://www.agoda.com/",
      image: "/linklogo/agoda.png",
    },
    {
      name: "호텔스컴바인",
      page: "https://www.hotelscombined.com/",
      image: "/linklogo/hotelscombined.png",
    },
    {
      name: "트립닷컴",
      page: "https://kr.trip.com/",
      image: "/linklogo/trip.jpeg",
    },
    {
      name: "인터파크 투어",
      page: "http://tour.interpark.com/",
      image: "/linklogo/interpark.jpeg",
    },
    {
      name: "에어비앤비",
      page: "https://www.airbnb.co.kr/",
      image: "/linklogo/airbnb_logo_detail.jpeg",
    },
    {
      name: "부킹닷컴",
      page: "https://www.booking.com/",
      image: "/linklogo/booking.jpeg",
    },
    {
      name: "트리바고",
      page: "https://www.trivago.co.kr/",
      image: "/linklogo/trivago_KR_logo.png",
    },
    {
      name: "스카이스캐너",
      page: "https://www.skyscanner.co.kr/",
      image: "/linklogo/skyscanner.jpeg",
    },
  ];

  return <LinkPageUI nation={nation} booking={booking} />;
}
