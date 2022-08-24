import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBenner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSide from "./side";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.4rem auto;
  @media (max-width: 990px) {
    width: 100%;
    margin: 1rem auto;
  }
`;

const Landing = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MediaSticky = styled.div`
  @media (max-width: 990px) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

const HIDDENT_Layout = ["/"];
const SHOW_BANNER = ["/main"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const hidden_Layout = HIDDENT_Layout.includes(router.asPath);
  const show_banner = SHOW_BANNER.includes(router.asPath);
  return (
    <>
      {!hidden_Layout ? (
        <>
          <MediaSticky>
            <LayoutHeader />
            {show_banner && <LayoutBanner />}
            <LayoutNavigation />
          </MediaSticky>
          <Body>{props.children}</Body>
          <LayoutFooter />
        </>
      ) : (
        <>
          <Landing>{props.children}</Landing>
        </>
      )}
    </>
  );
}
