/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { connect } from "react-redux";

function Footer({ bahasa }) {
  const [text] = useTypewriter({
    words: [
      "Event Management & Production ?",
      "Production House ?",
      "Booth Design & Build ?",
      "Brand Activation ?",
    ],
    loop: {},
  });

  return (
    <div className="relative z-[20]">
      <div className="md:flex bg-grayDark py-10 px-12 lg:px-40 justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">
            {!bahasa ? "Are You Looking For" : "Apakah Anda Mencari"}
            <span className="ml-2 text-gold">{text}</span>
            <Cursor />
          </h1>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=6282323896763"
          target="_blank"
        >
          <button className="hidden md:flex items-center ml-8 gap-4 text-xl border-[2px] border-white px-8 py-3 rounded-2xl">
            {!bahasa ? "Contact Us" : "Hubungi Kami"}
            <FaChevronRight />
          </button>
        </a>

        <button className="flex md:hidden items-center gap-4 text-xl border-[2px] border-white w-full justify-center py-3 mt-8 rounded-2xl">
          {!bahasa ? "Contact Us" : "Hubungi Kami"}
          <FaChevronRight />
        </button>
      </div>
      <div className="bg-black px-12 lg:px-24 py-12 lg:flex justify-between">
        <div className="flex flex-col lg:items-center">
          <img src="/images/logo-mahaka.png" alt="" className="w-40" />
          <p className="text-gray-600 text-xl italic">Your Dreams Matter</p>
        </div>
        <div className="hidden lg:flex flex-col justify-around ">
          <p className="text-lg">Want to Hire Us?</p>
          <h1 className="text-5xl font-bold">Let&apos;s Discuss</h1>
          <h2 className="text-xl">Contact Us for Detail Information</h2>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3 pt-8 lg:pt-3">
            {!bahasa ? "Contact Us :" : "Hubungi Kami :"}
          </h1>
          <div className="flex items-center gap-2 pb-1">
            <FaPhoneAlt size={24} />
            <h2 className="text-lg">0823 2389 6763</h2>
          </div>
          <div className="flex items-center gap-2">
            <HiMail size={24} />
            <h2 className="text-lg">Mahakakreativa@gmail.com</h2>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-3 pt-8 lg:pt-3">
            {!bahasa ? "Follow Us :" : "Ikuti Kami :"}
          </h1>
          <div className="flex gap-2 pb-1">
            <a
              href="https://api.whatsapp.com/send/?phone=6282323896763"
              target="_blank"
            >
              <img
                src="/images/whatsapp.png"
                alt=""
                className="h-[30px] w-auto hover:scale-125 transition-all duration-300"
              />
            </a>
            <a href="https://www.instagram.com/maha.kreativa/" target="_blank">
              <img
                src="/images/instagram.png"
                alt=""
                className="h-[30px] w-auto hover:scale-125 transition-all duration-300"
              />
            </a>
          </div>
          <h2 className="text-lg text-white">Mahaka kreativa</h2>
        </div>
      </div>
      <h1 className="bg-black text-center pb-8 text-gray-500">
        &copy; 2024 Mahaka Kreativa. Powered by{" "}
        <a href="https://www.instagram.com/hadi.shirath/" target="_blank">
          Hadi Shirath
        </a>
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  bahasa: state.LanguageReducer.bahasa,
});

export default connect(mapStateToProps, null)(Footer);
