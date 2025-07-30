import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import CertificationSection from "./components/CertificationSection";
import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
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
