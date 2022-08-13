import PaymentsUI from "./payment.presnter";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};
export default function Payments(props) {
  const router = useRouter();
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    // Imp는 기본적으로 widow에 내장된게 아님
    // 제이쿼리가 실행되며 IMP를 넣어줌
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: props.data?.fetchUseditem?.name,
        amount: props.data?.fetchUseditem?.price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // M_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          //   ...,
          // 결제 성공 시 로직,
          alert("결제가 완료됨");
          // 백엔드에 결제 관련 데이터 넘겨주기(뮤테이션 실행하기)
          // ex.createPointTransactionOfLoad
          router.push("/markets");
        } else {
          //   ...,
          // 결제 실패 시 로직,
          //   ...
          alert("결제가 실패했습니당");
          router.push(`/markets/${router.query._id}`); // 새로고침ㅎ
        }
      }
    );
  };
  return <PaymentsUI requestPay={requestPay} />;
}
