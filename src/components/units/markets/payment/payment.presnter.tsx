import styled from "@emotion/styled";

const Btn = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: skyblue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import Head from "next/head";
export default function PaymentsUI(props) {
  return (
    <div>
      <Head>
        {/*  <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Btn onClick={props.requestPay}>결제하기</Btn>
    </div>
  );
}
