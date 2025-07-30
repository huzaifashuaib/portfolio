import { Server } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaDev } from "react-icons/fa";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="py-8 px-8 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-3 mb-2 ">
          <div className="size-8 bg-slate-700 rounded-lg flex items-center justify-center">
            <Server className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white font-mono">
            Muhammad Fahad
          </span>
        </div>
        <p className="mb-2 font-sans text-xs">
          Designing robust OSS/cloud systems with precision and
          automation-driven excellence.
        </p>
        <p className="text-sm flex flex-col md:flex-row items-center justify-center gap-2 font-mono">
          © {Year} All rights reserved. Built with modern web technologies by{" "}
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/huzaifa-shuaib-797962212/"}
            className="text-yellow-300 font-bold font-mono flex items-center gap-2"
          >
            {" "}
            dev-huz
            <FaDev />{" "}
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
