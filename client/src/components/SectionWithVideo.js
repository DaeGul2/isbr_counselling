import React, { useEffect, useRef } from "react";
import "./SectionWithVideo.css";

function SectionWithVideo({ videoSrc, children, id }) {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();

      // 섹션이 뷰포트에 진입하기 시작할 때 (상단이 뷰포트에 닿을 때)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (videoRef.current && videoRef.current.paused) {
          videoRef.current.play().catch((error) => {
            console.error("Video play error:", error);
          });
        }
        if (textRef.current) {
          textRef.current.classList.add("fade-in");
        }
      } else {
        // 섹션이 뷰포트를 완전히 벗어났을 때
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
        if (textRef.current) {
          textRef.current.classList.remove("fade-in");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <section id={id} className="section-with-video">
      <video
        ref={videoRef}
        src={videoSrc}
        className="background-video"
        muted
        loop
        playsInline
        autoPlay
      />
      <div className="content" ref={textRef}>
        {children}
      </div>
    </section>
  );
}

export default SectionWithVideo;
