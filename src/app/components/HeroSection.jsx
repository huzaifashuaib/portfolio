"use client";

import { ChevronDown } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import SlideUpWrapper from "./SlideUpWrapper";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <SlideUpWrapper
        id="home"
        className={`min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-blue-50 via-white to-gray-50 
        relative overflow-hidden py-35 md:py-40 
      `}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>

        <div className=" flex flex-col space-y-4 text-center px-3 md:px-8 max-w-5xl mx-auto relative z-10 ">
          <h3 className="text-3xl font-bold font-mono text-gray-900 leading-tight">
            Hi👋I'm
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-mono mb-6 text-gray-900 leading-tight">
            Muhammad Fahad
            <span className="block text-blue-600 text-xl md:text-3xl font-sans mt-2">
              Network Operations & OSS Engineer
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-sm sm:text-lg md:text-3xl text-gray-600 mb-6 font-light leading-relaxed font-mono">
            Driving Telecom Excellence through OSS, ENIQ & Intelligent
            Automation
          </p>

          <p className="text-sm sm:text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
            Experienced OSS/ENM/ENIQ Engineer with 14+ years in telecom
            operations, automation, and infrastructure management. Skilled in
            system admin, network monitoring, and enterprise tools like SAP BO,
            ENM, and Sybase.
          </p>

          <Link
            href="#"
            className="border-2 w-full sm:w-fit mx-auto mb-16 border-gray-300 hover:border-blue-600 text-gray-700 font-mono hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Download Resume
          </Link>

          <div className="flex justify-center space-x-8">
            <Link
              href="https://wa.me/+353862031953?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaWhatsapp className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mfahad544/"
              target="_blank"
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <FaLinkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </Link>
          </div>
        </div>
        {/* </div> */}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </SlideUpWrapper>
    </div>
  );
};

export default HeroSection;
