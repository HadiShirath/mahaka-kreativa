/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ModalPortfolio({
  modalIsOpen,
  valueImagesEvent,
  dataModal,
  setModalIsOpen,
  setvalueImagesEvent,
}) {
  const date = dataModal[0];
  const title = dataModal[1];
  const subtitle = dataModal[2];
  const photos = dataModal[3];

  return (
    <div className="fixed w-full flex top-0  bottom-0 items-center justify-center z-[30]">
      <div
        className="w-full h-full bg-black opacity-70"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      />
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="bg-black hidden md:flex border-gold border-[1px] border-opacity-40 shadow-xl shadow-gold py-10 px-6 w-[80%] rounded-3xl absolute"
      >
        <div className="px-4">
          <div
            className="absolute z-[3] right-8 top-8 cursor-pointer"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <MdClose size={30} className="text-gold" />
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col relative">
              <div className="flex flex-col w-full overflow-hidden  h-full">
                <div className="z-[2] flex flex-col items-center py-8 ">
                  <p className="text-2xl">{date}</p>
                  <h1 className="text-5xl font-semibold ">{title}</h1>
                  <h2 className="text-2xl">{subtitle}</h2>
                </div>
                <div className="absolute overflow-hidden w-full h-1/2 z-[1] ">
                  <div className="absolute w-full h-full bg-black opacity-80" />
                  <LazyLoadImage src={photos[1]} alt="" className="w-full " />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-x-2 pt-4 z-[2]">
                {photos.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setvalueImagesEvent(index)}
                      className="bg-gold bg-opacity-30"
                    >
                      <LazyLoadImage
                        src={item}
                        alt=""
                        className="w-full h-full bg-cover"
                        effect="blur"
                      />
                    </div>
                  );
                })}
              </div>
              <h1 className=" text-gold text-sm text-center pt-6">
                PROJECT MAHAKA KREATIVE
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="bg-black flex md:hidden border-gold border-[1px] border-opacity-40 shadow-xl shadow-gold p-2 lg:p-12 w-[80%] md:w-3/4 rounded-3xl absolute"
      >
        <div className="px-4">
          <h1 className="pb-8 pt-4 md:pt-2 text-gold text-sm">
            PROJECT MAHAKA KREATIVE
          </h1>
          <div
            className="absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <MdClose size={30} className="text-gold" />
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full overflow-hidden">
              <LazyLoadImage
                src={photos[valueImagesEvent]}
                alt=""
                className="w-full bg-cover border border-gold rounded-lg md:rounded-2xl mr-8"
              />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-3 gap-2 py-4">
                {photos.map((item, index) => {
                  if (index === valueImagesEvent) {
                    return null;
                  }
                  return (
                    <div key={index} onClick={() => setvalueImagesEvent(index)}>
                      <LazyLoadImage
                        src={item}
                        alt=""
                        className="hover:border-gold border-black border-[2px] w-full cursor-pointer "
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex md:hidden pt-4 pb-8  flex-col justify-center w-full  h-full">
                <p className="text-xl">{date}</p>
                <h1 className="text-2xl md:text-4xl font-semibold">{title}</h1>
                <h2>{subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
