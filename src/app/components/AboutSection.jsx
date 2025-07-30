"use client";
import {
  Award,
  Cloud,
  Code,
  Database,
  Monitor,
  Server,
  Shield,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import userImg from "../../../public/icons/profile.jpeg";
import SlideUpWrapper from "./SlideUpWrapper";

const skills = [
  {
    icon: <Server className="w-10 h-10" />,
    name: "OSS/ENM Administration",
    desc: "ENM, ENIQ-S, OSSRC, OMBS, SAP BO",
    level: "Expert",
  },
  {
    icon: <Database className="w-10 h-10" />,
    name: "Database Management",
    desc: "Sybase ASE/IQ, MySQL, Oracle, MSSQL",
    level: "Advanced",
  },
  {
    icon: <Code className="w-10 h-10" />,
    name: "Automation & Scripting",
    desc: "Robot Framework, Selenium, Shell",
    level: "Advanced",
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    name: "Monitoring & Fault Management",
    desc: "ManageEngine, SNMP, Alerts, NetBackup",
    level: "Expert",
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    name: "System Administration",
    desc: "Linux (RedHat/Solaris), Windows Server",
    level: "Expert",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    name: "Telecom Infrastructure",
    desc: "2G/3G/4G/5G RAN & Core Nodes",
    level: "Expert",
  },
];

const experience = [
  {
    role: "OSS/ENM/ENIQ Engineer",
    company: "Zain Bahrain",
    period: "2015 - Present",
  },
  {
    role: "Back Office NMS/OSS Engineer",
    company: "Ericsson (Warid Telecom Pakistan)",
    period: "2014 - 2015",
  },
  {
    role: "IN & VAS Engineer",
    company: "Wateen Telecom Pakistan",
    period: "2010 - 2013",
  },
];

const AboutSection = () => {
  return (
    <SlideUpWrapper
      id="about"
      className={`py-15 md:py-20 px-3 md:px-6 bg-gray-50`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 ">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-mono">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Telecom systems engineer with 14+ years' experience in OSS/ENM/ENIQ
            operations, automation, and performance management across diverse
            platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20 md:mb-24">
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 font-mono px-2">
              Professional Journey
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6 font-sans px-2">
              With 14+ years of experience in OSS, ENM, and ENIQ systems, I've
              worked across telecom operators to ensure reliable,
              high-performance network operations and system availability.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-8 px-2">
              My focus includes infrastructure management, automation, and
              fault/performance optimization using tools like SAP BO, Sybase,
              and ManageEngine, enabling efficient service delivery and
              operational excellence.
            </p>

            <div className="space-y-4 mb-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div>
                    <h1 className="font-semibold text-gray-900 font-mono text-lg mb-3">
                      {exp.role}
                    </h1>
                    <p className="text-gray-600 font-sans text-sm">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-600 font-mono">
                14+
              </h1>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>

          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10 transition-all duration-500 hover:shadow-blue-400 cursor-pointer">
              {/* Image with Gradient Background */}
              <div className="flex items-center justify-center w-full h-80 relative overflow-hidden">
                <Image
                  src={userImg}
                  alt="fahad"
                  fill
                  className=" object-contain shadow-xl border-4 border-white"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight font-mono">
                  Muhammad Fahad
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  OSS/ENIQ | Scalable Systems • Automation • Infrastructure
                </p>
              </div>
            </div>
            {/* Background Accent Glow */}
            <div className="hidden md:flex absolute -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-blue-100 via-purple-300 to-blue-500 blur-xl opacity-50 z-0"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-4 font-mono">
            Core Expertise
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900 font-mono">
                  {skill.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-sans">
                  {skill.desc}
                </p>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideUpWrapper>
  );
};

export default AboutSection;
