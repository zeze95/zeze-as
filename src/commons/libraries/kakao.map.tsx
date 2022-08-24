import { useEffect } from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../styles/media";
declare const window: typeof globalThis & {
  kakao: any;
};
const MapWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  overflow: auto;
  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;
export default function KakakomapPage(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=105b9fd39ffdb2805ac7b372a8d3797d&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4846, 126.8979), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
          isPanto: true,
        };
        const map = new window.kakao.maps.Map(container, options);

        // const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 마커를 위해서는 별도로 담아야한다
        // 지도 생성 및 객체 리턴
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(`${props.address}`, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">거래 장소</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };

    // div에 지도를 그려줘
  }, [props.address]);
  return (
    <MapWrapper>
      <div id="map" style={{ width: 1100, height: 500 }}></div>
    </MapWrapper>
  );
}
