import * as Footer from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <>
      <Footer.Wrapper>
        <Footer.InsideWrapper>
          <Footer.Title>Copyright© To the moon (@zeze95)</Footer.Title>
          <Footer.Info>
            사업장 주소: 12345 서울시 구로구 디지털로 300 13F <br />
            사업자등록번호: 000-00-00000 <br />
            (평일 09:00~18:00 / 점심시간 13:00~14:00 / 주말 및 공휴일 휴무)
          </Footer.Info>
          <Footer.MenuWrapper>
            <Footer.Link href={"/contact"}>문의하기</Footer.Link>
            <Footer.Link href={"https://github.com/zeze95"}>
              코드 보기
            </Footer.Link>
            <Footer.Link href={"https://velog.io/@zeze95"}>
              블로그 보기
            </Footer.Link>
          </Footer.MenuWrapper>
        </Footer.InsideWrapper>
      </Footer.Wrapper>
    </>
  );
}
