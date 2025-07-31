import React, { useRef } from "react";

const VideoReveal = ({ onVideoEnd }) => {
  const wrapperRef = useRef(null);

  const handleVideoEnded = () => {
    wrapperRef?.current?.classList?.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      onVideoEnd();
    }, 300);
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
        playsInline
        onEnded={handleVideoEnded}
      >
        <source
          src="https://res.cloudinary.com/dk6huqfvz/video/upload/v1753958482/OpeningVideo_e1idwv.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoReveal;
