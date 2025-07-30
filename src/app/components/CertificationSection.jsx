"use client";

import {
  Calendar,
  Cloud,
  Code,
  Database,
  FileText,
  Monitor,
  Server,
  Shield,
} from "lucide-react";
import React, { useState } from "react";
import kuber1 from "../../../public/icons/kuber1.png";
import kuber2 from "../../../public/icons/kuber2.png";
import kuber3 from "../../../public/icons/kuber3.png";
import kuber4 from "../../../public/icons/kuber4.png";
import kuber5 from "../../../public/icons/kuber5.png";
import kuber6 from "../../../public/icons/kuber6.png";
import orcale from "../../../public/icons/oracle.webp";
import erricson from "../../../public/icons/erricson.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SlideUpWrapper from "./SlideUpWrapper";
const certifications = [
  {
    name: "Oracle Database 10g Administrator Certified Associate",
    issuer: "Oracle",
    date: "2014",
    status: "Active",
    icon: orcale,
    path: "https://www.credly.com/badges/6f44c77d-af26-45ea-8125-d15a8b233654/linked_in_profile",
  },
  {
    name: "Oracle Database 10g Administrator Certified Professional",
    issuer: "Oracle",
    date: "2015",
    status: "Active",
    icon: orcale,
    path: "https://www.credly.com/badges/1cfff8f7-7b27-4899-ac4e-12913f228d03/linked_in_profile",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "2023",
    status: "Active",
    icon: kuber1,
    path: "https://www.credly.com/badges/d8c1af63-029b-4e5c-b0a6-a21bf0ac1779/linked_in_profile",
  },
  {
    name: "BCSS Cloud Fundamental Level 2024",
    issuer: "Ericsson",
    date: "2024",
    status: "Active",
    icon: erricson,
    path: "https://www.credly.com/badges/c81382f0-7b3e-47dc-b0d6-fa2698e631f3/linked_in_profile",
  },
  {
    name: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2025",
    status: "Active",
    icon: kuber5,
    path: "https://www.credly.com/badges/223a3eeb-f90a-4997-bf84-a2cc56a46fa3",
  },
  {
    name: "Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    date: "2025",
    status: "Active",
    icon: kuber2,
    path: "https://www.credly.com/badges/425c1f21-ab09-48bc-9cf6-8cdb487690b0",
  },
  {
    name: "Certified Kubernetes Security Specialist",
    issuer: "The Linux Foundation",
    date: "2025",
    status: "Active",
    icon: kuber4,
    path: "https://www.credly.com/badges/1f97b8d3-8f99-4d62-aa5c-286b08662121",
  },
  {
    name: "Kubestronaut",
    issuer: "The Linux Foundation",
    date: "2025",
    status: "Active",
    icon: kuber6,
    path: "https://www.credly.com/badges/78bf801b-a9a5-4153-9b42-f87a64c444f1",
  },
  {
    name: "Kubernetes and Cloud Native Security Associate",
    issuer: "The Linux Foundation",
    date: "2025",
    status: "Active",
    icon: kuber3,
    path: "https://www.credly.com/badges/cae0c072-1d00-40e9-98d8-7f177f3e2c7e",
  },
];
const reversedCertifications = certifications.slice().reverse();
const swipeIcons = [
  kuber1,
  kuber2,
  kuber3,
  kuber4,
  kuber5,
  kuber6,
  orcale,
  erricson,
  kuber4,
  kuber1,
  orcale,
  kuber6,
  kuber5,
  erricson,
  kuber3,
  kuber5,
  kuber6,
  kuber5,
  kuber6,
  orcale,
  erricson,
];
const CertificationSection = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * itemsPerPage;
  const paginatedCerts = reversedCertifications.slice(
    start,
    start + itemsPerPage
  );
  const totalPages = Math.ceil(certifications.length / itemsPerPage);
  return (
    <SlideUpWrapper className={`py-20 px-3 md:px-6 `} id="certification">
      <section className="pt-3 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xl md:text-3xl  font-bold text-gray-900 text-center mb-5 font-mono">
              Certifications
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedCerts.map((cert, index) => (
              <div
                key={index}
                className="group cursor-pointer flex flex-col justify-between bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="flex justify-between mb-4">
                  <Image
                    src={cert.icon}
                    width={0}
                    height={0}
                    alt="icons"
                    className="size-20"
                  />
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4 text-gray-900 font-mono">
                  {cert.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">Issued: {cert.date}</span>
                  </div>
                  <Link
                    href={cert.path}
                    target="_blank"
                    className="inline-flex items-center font-mono px-4 py-1.5 hover:scale-110 rounded-md text-sm font-semibold bg-blue-700 text-white hover:bg-blue-500 transition"
                  >
                    Verify
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  className={`w-9 cursor-pointer h-9 flex items-center justify-center rounded-full text-sm font-medium border transition-all duration-300 ${
                    currentPage === index
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <div className=" overflow-x-hidden">
          <div className="marquee-Gradient">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="flex mr-28"
            >
              {swipeIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="icon"
                  width={0}
                  height={0}
                  className="w-20 h-full shrink-0 mr-28 grayscale-100"
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div className=" overflow-x-hidden">
          <div className="marquee-Gradient mt-5">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="flex mr-28"
            >
              {swipeIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="icon"
                  width={0}
                  height={0}
                  className="w-20 h-full shrink-0 mr-28 grayscale-100"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </SlideUpWrapper>
  );
};

export default CertificationSection;
