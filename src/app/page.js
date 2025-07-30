"use client";

import { useState } from "react";
import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import CertificationSection from "./components/CertificationSection";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import VideoReveal from "./components/VideoReveal";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  return (
    <>
      {isVideoPlaying ? (
        <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
      ) : null}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CertificationSection />
      <Blog />
      <Collaborate />
      <Footer />
    </>
  );
}
