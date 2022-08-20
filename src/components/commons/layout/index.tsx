import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBenner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSide from "./side";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem 0;
`;
const Landing = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const HIDDENT_Layout = ["/"];
const SHOW_BANNER = ["/main"];
// const HIDDENT_Layout = [
//   "/12-05-modal-refactoring",
//   // ...주소 이름
//   // ... 주소이름
//   // ... 주소이름
// ];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const hidden_Layout = HIDDENT_Layout.includes(router.asPath);
  const show_banner = SHOW_BANNER.includes(router.asPath);
  return (
    <div>
      {!hidden_Layout ? (
        <>
          <LayoutHeader />
          {show_banner && <LayoutBanner />}

          <LayoutNavigation />
          <FlexBox>
            <LayoutSide />
            <Body>{props.children}</Body>
          </FlexBox>

          <LayoutFooter />
        </>
      ) : (
        <>
          <Landing>{props.children}</Landing>
        </>
      )}
    </div>
  );
}
