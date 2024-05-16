/* eslint-disable react/prop-types */
import { HiOutlineClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";

export default function Services({ bahasa }) {
  const services = [
    {
      logo: "/images/services-1.png",
      item: "Event Management & Production",
    },
    {
      logo: "/images/services-2.png",
      item: "Production House",
    },
    {
      logo: "/images/services-3.png",
      item: "Booth Design & Build",
    },
    {
      logo: "/images/services-4.png",
      item: "Brand Activation",
    },
  ];
  return (
    <div className="pt-12">
      <p className="text-gold font-semibold text-xl md:text-2xl text-center">
        {!bahasa ? "How Can We Help?" : "Bagaimana Kami Dapat Membantu?"}
      </p>
      <div className="flex gap-2 justify-center items-center">
        <HiOutlineClipboardList size={40} className="text-orange" />
        <h1 className="text-4xl md:text-5xl font-bold">
          {!bahasa ? "Our Services" : "Pelayanan Kami"}
        </h1>
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className="flex flex-wrap justify-center gap-12 py-16"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={slideInFromBottom(`0.${index}`)}
            className="flex"
          >
            <div className="flex flex-col justify-center items-center w-[250px]  py-14 border-gold border-[2px] rounded-3xl hover:border-white hover:scale-110 transition-all duration-300">
              <img src={item.logo} alt="" className="w-[70px] pb-4" />
              <h1
                className={`${
                  index % 2 === 0 ? "max-w-[180px]" : "max-w-[100px]"
                } text-center text-gold text-xl font-semibold`}
              >
                {item.item}
              </h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
