/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";

const AboutUs = forwardRef(({ bahasa }, ref) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-[1400px] px-12 lg:px-16 relative"
      ref={ref}
    >
      <div className="flex lg:hidden w-full h-full pt-12">
        <img src="/images/about-us.png" alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute flex z-[-1] right-[-400px] md:top-[-100px] ">
        <img src="/images/glow.png" alt="" />
      </div>
      <div className="absolute flex z-[-1] left-[-370px] bottom-[-460px] md:bottom-[-400px] ">
        <img src="/images/glow.png" alt="" />
      </div>
      <motion.div
        variants={slideInFromBottom(0.5)}
        className="flex gap-20 items-center py-12"
      >
        <div className="hidden lg:flex w-[90%] lg:ml-8">
          <img src="/images/about-us.png" alt="" className="w-auto h-auto" />
          {/* <video src="/videos/agam-inong-1.mp4" autoPlay controls loop /> */}
        </div>
        <div className="w-full ">
          <p className="text-4xl lg:text-5xl font-semibold pb-2">
            Mahaka Kreativa
          </p>
          <h1 className="text-gold text-xl pb-6">
            {!bahasa ? "In Associate PT. GBS" : "Di Asosiasi PT. GBS"}
          </h1>
          <h2 className="text-xl lg:text-2xl max-w-[550px] pb-12 lg:pb-18 ">
            {!bahasa
              ? "We specialize in turning events into unforgettable moments. With our creative flair, meticulous planning, and flawless execution, we create experiences that go beyond the ordinary, leaving a lasting impression on every guest."
              : "Kami mengkhususkan diri dalam mengubah peristiwa menjadi momen tak terlupakan. Dengan bakat kreatif, perencanaan yang cermat, dan pelaksanaan yang sempurna, kami menciptakan pengalaman yang melampaui hal biasa, meninggalkan kesan mendalam pada setiap tamu."}
          </h2>
          <a href="/about-us" aria-label="About Us">
            <button className="flex border-gold border-[2px] px-6 py-4 rounded-2xl text-md md:text-xl items-center gap-6 text-white">
              {!bahasa ? "Learn Information" : "Selengkapnya"}

              <FaChevronRight />
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
