import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBenner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSide from "./side";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useEffect } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const RandingPage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;
const HIDDENT_Layout = ["/"];

// const HIDDENT_Layout = [
//   "/12-05-modal-refactoring",
//   // ...주소 이름
//   // ... 주소이름
//   // ... 주소이름
// ];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const hidden_Layout = HIDDENT_Layout.includes(router.asPath);

  return (
    <div>
      {!hidden_Layout ? (
        <>
          <LayoutHeader />
          <LayoutBanner />
          <LayoutNavigation />
          <FlexBox>
            <LayoutSide />
            <Body>{props.children}</Body>
          </FlexBox>

          <LayoutFooter />
        </>
      ) : (
        <>
          <Body>{props.children}</Body>
        </>
      )}
    </div>
  );
}
