import styled from "@emotion/styled";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import useScript from "../../hooks/useScript";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const URLShareButton = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  border-radius: 24px;
  border: none;
  font-size: 10px;
`;

const KakaoIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Twitter = styled(TwitterIcon)`
  width: 30px;
  height: 30px;
`;

const Facebook = styled(FacebookIcon)`
  width: 30px;
  height: 30px;
`;

declare const window: typeof globalThis & {
  Kakao: any;
};

export default function ShareButton() {
  const [currentUrl, setCurrentUrl] = useState("");
  // window 객체에서 현재 url 가져오기
  useEffect(() => {
    const currentUrl = window.location.href;
    setCurrentUrl(currentUrl);
  }, []);

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init(`105b9fd39ffdb2805ac7b372a8d3797d`);
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const onClickURL = () => {
    Modal.success({ content: "링크가 복사되었습니다." });
  };

  return (
    <Wrapper>
      <FacebookShareButton url={currentUrl}>
        <Facebook round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl}>
        <Twitter round={true} />
      </TwitterShareButton>
      <CopyToClipboard text={currentUrl}>
        <URLShareButton onClick={onClickURL}>URL</URLShareButton>
      </CopyToClipboard>
      <KakaoIcon onClick={handleKakaoButton} src="/icons/Kakao.jpeg" />
    </Wrapper>
  );
}
