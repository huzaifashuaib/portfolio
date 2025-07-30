import React, { useRef } from "react";

const VideoReveal = ({ onVideoEnd }) => {
  const wrapperRef = useRef(null);

  const handleVideoEnded = () => {
    wrapperRef?.current?.classList?.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      onVideoEnd();
    }, 500);
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-500"
    >
      <video
        autoPlay
        muted
        className="h-full w-full object-cover"
        onEnded={handleVideoEnded}
      >
        <source src="/OpeningVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoReveal;
