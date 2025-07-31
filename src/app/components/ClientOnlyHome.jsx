"use client";

import React, { useState } from "react";
import VideoReveal from "./VideoReveal";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CertificationSection from "./CertificationSection";
import Blog from "./Blog";
import Collaborate from "./Collaborate";
import Footer from "./Footer";

const ClientOnlyHome = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  return (
    <>
      {!videoEnded && <VideoReveal onVideoEnd={() => setVideoEnded(true)} />}
      {videoEnded && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <CertificationSection />
          <Blog />
          <Collaborate />
          <Footer />
        </>
      )}
    </>
  );
};

export default ClientOnlyHome;
