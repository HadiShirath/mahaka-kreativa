/* eslint-disable react/prop-types */

import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";

export default function Hero({ click, bahasa }) {
  return (
    <motion.div
      className="relative py-12"
      initial="offscreen"
      whileInView="onscreen"
    >
      <div className="flex px-12 lg:px-24 w-full justify-between py-10">
        <motion.div className="w-full" variants={slideInFromBottom(0.3)}>
          <p className="text-gold text-3xl">Your Dreams Matter</p>
          <h1 className="text-white font-bold text-6xl md:text-7xl pt-8">
            {!bahasa ? "We Are" : "Kami Adalah"}
          </h1>
          <h1 className="text-white font-bold text-6xl md:text-7xl pt-2">
            Event Organizer
          </h1>
          <h2 className="text-2xl md:text-3xl pt-6">
            {!bahasa ? (
              <span>
                We Present An <span className="text-gold">Unforgettable</span>{" "}
                Experience In Every Event
              </span>
            ) : (
              <span>
                Kami Menghadirkan Pengalaman{" "}
                <span className="text-gold">Tak Terlupakan</span> Di Setiap
                Acara
              </span>
            )}
          </h2>
          <img src="/images/hero.svg" alt="" className="flex md:hidden mt-12" />
          <button
            className="text-black hover:scale-95 transition-all duration-30 rounded-xl flex items-center bg-gradient-to-b from-gold2 to-gold3 py-4 px-10 gap-8 border-none mt-12"
            onClick={click}
          >
            <span className="text-xl font-semibold 0">
              {!bahasa ? "Get Started" : "Memulai"}
            </span>
            <FaChevronRight size={20} />
          </button>
        </motion.div>
        <motion.img
          variants={slideInFromBottom(0.7)}
          src="/images/hero.svg"
          alt=""
          className="hidden md:flex mt-12"
        />
      </div>

      <img
        src="/images/background.jpg"
        alt=""
        className="absolute top-[400px] md:top-0 opacity-30 h-1/3 md:h-auto z-[-1]"
      />
    </motion.div>
  );
}
