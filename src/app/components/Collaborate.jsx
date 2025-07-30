"use client";

import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SlideUpWrapper from "./SlideUpWrapper";
const Collaborate = () => {
  const [showModal, setShowModal] = useState(false);
  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);
  return (
    <>
      <SlideUpWrapper
        id="collaborate"
        className={`px-3 md:px-6  justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden py-20 text-black shadow-md `}
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
            className=" text-white hover:bg-blue-500 cursor-pointer font-mono  bg-blue-700 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Call
          </button>
        </div>
      </SlideUpWrapper>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="w-full max-w-2xl h-[80%] relative bg-white rounded-xl shadow-xl p-4 pt-15">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 cursor-pointer"
              onClick={handleCloseModal}
            >
              <RxCross2 size={24} />
            </button>
            <iframe
              src="https://calendly.com/mfahad544/30min?timezone=Europe/Dublinembed_type=Inline"
              width="100%"
              height="100%"
              className="rounded-lg "
              title="Calendly Inline Embed"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Collaborate;
