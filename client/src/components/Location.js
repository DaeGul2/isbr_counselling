import React from "react";
import { useEffect } from "react";
import "./Location.css";

function Location() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=1c83af021b65d0c12bfa84c3b61d18dc&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            // 회사의 정확한 좌표 (예: 수원시 영통구 창룡대로 260)
            center: new window.kakao.maps.LatLng(37.2917, 127.0466), 
            level: 3 // 지도 확대 레벨
          };
          const map = new window.kakao.maps.Map(container, options);

          // 마커 추가
          const markerPosition = new window.kakao.maps.LatLng(37.295402, 127.037166);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map); // 마커를 지도에 표시
        });
      }
    };

    script.onerror = () => {
      console.error("Kakao map script failed to load.");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <section className="location py-5">
      <div className="container">
        <h2>Address</h2>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
        <p>경기 수원시 영통구 창룡대로 260 광교센트럴비즈타워 510호</p>
      </div>
    </section>
  );
}

export default Location;
