"use client";

import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SlideUpWrapper from "./SlideUpWrapper";

const Collaborate = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBookNowClick = () => {
    setShowModal(true);
    setLoading(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIframeLoaded(false);
    setLoading(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      <SlideUpWrapper
        id="collaborate"
        className="px-3 md:px-6 justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden py-20 text-black shadow-md"
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 font-mono">
            Ready to Collaborate?
          </h3>
          <p className="text-lg mb-8 opacity-90 leading-relaxed font-sans">
            Let's discuss how we can optimize your OSS/cloud systems and speed
            up deployments through automation.
          </p>

          <button
            onClick={handleBookNowClick}
            disabled={loading}
            className={`hidden md:flex text-white mx-auto font-mono bg-blue-700 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-blue-500 items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </>
            ) : (
              "Schedule a Call"
            )}
          </button>
        </div>
      </SlideUpWrapper>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-2xl h-[80%] relative bg-white rounded-xl shadow-xl p-4 pt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 cursor-pointer"
              onClick={handleCloseModal}
            >
              <RxCross2 size={24} />
            </button>

            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10 rounded-xl">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <iframe
              src="https://calendly.com/mfahad544/30min?timezone=Europe/Dublin&embed_domain=localhost&embed_type=Inline"
              width="100%"
              height="100%"
              className="rounded-lg"
              title="Calendly Inline Embed"
              loading="lazy"
              onLoad={() => {
                setIframeLoaded(true);
                setLoading(false);
              }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Collaborate;
