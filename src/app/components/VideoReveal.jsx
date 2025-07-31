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
        onEnded={handleVideoEnded}
      >
        <source
          src="https://dl.dropboxusercontent.com/scl/fi/64fwr41nzrzb97z6t01wb/OpeningVideo.mp4?rlkey=0zxvno5uy8c3n8ruisk6ssgn2&st=6h4bobau"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoReveal;
