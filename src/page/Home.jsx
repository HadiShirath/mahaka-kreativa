/* eslint-disable react/prop-types */
import "../App.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import OurGallery from "../components/OurGallery";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Hero from "../components/Hero";
import { useRef } from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

function Home({ bahasa }) {
  const [loading, setLoading] = useState(true);
  const aboutUsRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="w-48 h-auto pb-12">
          <img src="/images/logo-mahaka.png" alt="" />
        </div>
        <BarLoader color={"#B3955A"} loading={loading} height={2} width={200} />
      </div>
    );
  }

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="relative">
      <a
        className="absolute"
        href="https://api.whatsapp.com/send/?phone=6282323896763"
        target="_blank"
      >
        <img
          src="/images/whatsapp-color.png"
          alt=""
          className="fixed z-[10] right-10 bottom-10 md:right-16 md:bottom-16 w-16  md:w-20 hover:scale-110 transition-all duration-300"
        />
      </a>

      <Navbar />
      <Hero click={scrollToAboutUs} bahasa={bahasa} />
      <AboutUs ref={aboutUsRef} bahasa={bahasa} />
      <Services bahasa={bahasa} />
      <Portfolio bahasa={bahasa} />
      <OurGallery bahasa={bahasa} />
      <Clients bahasa={bahasa} />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  bahasa: state.LanguageReducer.bahasa,
});

export default connect(mapStateToProps, null)(Home);
