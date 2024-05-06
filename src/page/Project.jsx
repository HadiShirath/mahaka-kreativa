/* eslint-disable react/prop-types */
import { dataProject } from "../data/project.js";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import { Keyboard, Mousewheel, Pagination } from "swiper/modules";
import ModalProject from "../components/atoms/ModalProject";

function Project({ bahasa }) {
  const data = dataProject
    .map((item) => ({
      year: item.year,
      project: item.project.slice().reverse(),
    }))
    .reverse();
  let numberIndex = 0;

  const [dataModal, setDataModal] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = (photo) => {
    setModalIsOpen(!modalIsOpen);
    setDataModal(photo);
  };

  return (
    <>
      {modalIsOpen && (
        <ModalProject
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          dataModal={dataModal}
        />
      )}
      <div className="flex top-0 pb-6 z-[10] w-full bg-black">
        <Navbar />
      </div>
      <div className="swiper">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <motion.div initial="offscreen" whileInView="onscreen" className="">
              <div className="relative bg-[url('/images/background.jpg')] flex flex-col items-center py-12 px-12 mt-8 ">
                <div className="absolute inset-0 bg-black opacity-50" />
                <motion.p
                  variants={slideInFromBottom(0.2)}
                  className="text-gold text-2xl lg:text-3xl z-[1]"
                >
                  Your Dreams Matter
                </motion.p>
                <motion.h1
                  variants={slideInFromBottom(0.4)}
                  className="text-4xl lg:text-5xl font-bold pt-4 z-[1] text-center"
                >
                  {!bahasa ? "Our Project Journey" : "Perjalanan Proyek Kami"}
                </motion.h1>
                <motion.h2
                  variants={slideInFromBottom(0.8)}
                  className="text-2xl lg:text-3xl pt-4 z-[1]"
                >
                  2018 - {!bahasa ? "Now" : "Sekarang"}
                </motion.h2>
              </div>

              <div className="absolute flex  left-[-370px] top-[250px] ">
                <img src="/images/glow.png" alt="" />
              </div>
              <div className="absolute flex right-[-370px] top-[100px] ">
                <img src="/images/glow.png" alt="" />
              </div>
              <motion.p
                variants={slideInFromBottom(1)}
                className="py-12 px-12 lg:px-72 text-[17px] md:text-2xl text-center"
              >
                {!bahasa
                  ? "The journey of Mahaka Kreativa is one marked by a relentless commitment to excellence in every event we undertake. From our humble beginnings to our current status as a leading force in the event organizing industry, our mission has always been to deliver nothing but the best, ensuringthat each occasion becomes an unforgettable moment for all involved."
                  : "Perjalanan Mahaka Kreativa ditandai dengan komitmen tiada henti untuk mencapai keunggulan dalam setiap acara yang kami laksanakan. Dari awal kami yang sederhana hingga status kami saat ini sebagai kekuatan terdepan dalam industri penyelenggaraan acara, misi kami selalu memberikan yang terbaik, memastikan bahwa setiap acara menjadi momen yang tak terlupakan bagi semua yang terlibat."}
              </motion.p>
            </motion.div>
          </SwiperSlide>
          {data.map((item) =>
            item.project.map((project) => {
              numberIndex += 1;
              return (
                <SwiperSlide key={numberIndex}>
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    className="swiper-slide"
                  >
                    <div className="swiper-slide img">
                      <div className="absolute w-full h-full bg-black bg-opacity-30  lg:bg-opacity-80" />
                      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent" />
                      <img
                        src={
                          project.photos
                            ? project.photos[0]
                            : "/images/events/FL2SN-1.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <motion.div
                      variants={slideInFromBottom(0.2)}
                      className="absolute bottom-[25%] text-center px-10 "
                    >
                      <h1 className="text-8xl font-bold opacity-20">
                        {item.year}
                      </h1>
                      <p className="text-md md:text-3xl">{project.date}</p>
                      <h1 className=" text-white text-4xl md:text-6xl font-bold">
                        {project.title}
                      </h1>
                      <h2 className="text-md md:text-3xl">
                        {project.subtitle}
                      </h2>

                      <div className="flex gap-2 pt-8">
                        {project.photos.map((photo, innerIndex2) => (
                          <motion.div
                            key={innerIndex2}
                            className="hover:border-gold border-[2px] border-black"
                            variants={slideInFromBottom(`0.${innerIndex2 + 2}`)}
                            onClick={() => toggle(photo)}
                          >
                            <img src={photo} alt="" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.h1
                      variants={slideInFromBottom(0.3)}
                      className="absolute text-gold bottom-[16%] py-8 w-full text-center"
                    >
                      Mahaka Kreativa
                    </motion.h1>
                  </motion.div>
                </SwiperSlide>
              );
            })
          )}

          <SwiperSlide>
            <motion.div initial="offscreen" whileInView="onscreen" className="">
              <div className="relative bg-[url('/images/background.jpg')] flex flex-col items-center py-12 px-12 mt-8 ">
                <div className="absolute inset-0 bg-black opacity-50" />
                <motion.div className="z-[2]">
                  <img
                    src="/images/logo-mahaka.png"
                    alt=""
                    className="w-[230px]"
                  />
                </motion.div>
              </div>

              <div className="absolute flex  left-[-370px] top-[250px] ">
                <img src="/images/glow.png" alt="" />
              </div>
              <div className="absolute flex right-[-370px] top-[100px] ">
                <img src="/images/glow.png" alt="" />
              </div>
              <h1 className="text-2xl md:text-4xl text-gray-600 italic text-center font-semibold py-6">
                Your Dreams Matter
              </h1>
              <motion.h1
                variants={slideInFromBottom(0.2)}
                className="py-4 px-12 font-bold text-2xl text-center"
              >
                Contact Us
              </motion.h1>
              <motion.div
                variants={slideInFromBottom(0.3)}
                className="flex md:flex-row flex-col w-full justify-center items-center"
              >
                <div className="flex gap-2">
                  <FaPhoneAlt size={24} />
                  <h2 className="text-lg pr-4">0823 2389 6763</h2>
                </div>
                <div className="flex items-center gap-2">
                  <HiMail size={24} />
                  <h2 className="text-lg">Mahakakreativa@gmail.com</h2>
                </div>
              </motion.div>
            </motion.div>
            <h1 className="absolute w-full bottom-[20%] text-gray-500 px-12 pt-16 text-center">
              &copy; 2024 Mahaka Kreativa. Powered by{" "}
              <a href="https://www.instagram.com/hadi.shirath/" target="_blank">
                Hadi Shirath
              </a>
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  bahasa: state.LanguageReducer.bahasa,
});

export default connect(mapStateToProps, null)(Project);
