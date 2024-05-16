/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { slideInFromBottom } from "../../utils/motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ListPortfolio({ dataNew, toggle }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 px-12 lg:grid-cols-3 justify-center gap-12 py-12"
    >
      {dataNew.map((item, index) => (
        <motion.div
          key={index}
          className="cursor-pointer"
          variants={slideInFromBottom(`0.${index}`)}
          onClick={() => {
            toggle(
              item.date,
              item.title,
              item.subtitle ? item.subtitle : null,
              item.photos
            );
          }}
        >
          <div className="overflow-hidden rounded-xl">
            <LazyLoadImage
              src={item.photos ? item.photos[0] : "/images/events/FL2SN1.jpg"}
              alt=""
              className="w-full hover:scale-125 transition-all duration-500"
            />
          </div>
          <div className="pt-4 px-2 md:px-4">
            <p className="text-md">{item.date}</p>
            <h1 className="text-2xl md:text-3xl font-semibold max-w-[90%]">
              {item.title}
            </h1>
            {item.subtitle && <h2>{item.subtitle}</h2>}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
