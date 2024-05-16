/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../utils/motion";
import { connect } from "react-redux";

function AboutUs({ bahasa }) {
  const team = [
    "/images/team/Fadhlul-Rezi.jpg",
    "/images/team/Acong.jpg",
    "/images/team/Hadi-Shirath.jpg",
    "/images/team/Putri-Saver.jpg",
    "/images/team/Miftahul-Fikri.jpg",
    "/images/team/Bahagia.jpg",
    "/images/team/Zikran-Abrar.jpg",
    "/images/team/Hatim.jpg",
  ];

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Navbar />
      <div className="relative">
        <a
          className="absolute"
          href="https://api.whatsapp.com/send/?phone=6282323896763"
          target="_blank"
        >
          <img
            src="/images/whatsapp-color.png"
            alt=""
            className="fixed z-[1] right-10 bottom-10 md:right-16 md:bottom-16 w-16 md:w-20 hover:scale-110 transition-all duration-300"
          />
        </a>
        <motion.div
          variants={slideInFromBottom(0.2)}
          className="flex px-12 pt-36 justify-center"
        >
          <img
            src="/images/logo-mahaka-2.png"
            alt=""
            className="w-[250px] lg:w-[400px]"
          />
        </motion.div>
        <motion.h1
          variants={slideInFromBottom(0.4)}
          className="text-center text-gold text-2xl lg:text-3xl py-8 italic"
        >
          Your Dreams Matter
        </motion.h1>

        <div className=" justify-center">
          <motion.p
            variants={slideInFromBottom(0.6)}
            className="text-md lg:text-xl px-12 lg:px-64 pb-4 text-center"
          >
            {!bahasa
              ? "Mahaka Kreativa is a subsidiary of PT. GBS. we specialize in turning events into unforgettable moments. With our creative flair, meticulous planning, and flawless execution, we create experiences that go beyond the ordinary, leaving a lasting impression on every guest."
              : "Mahaka Kreativa merupakan anak perusahaan PT. GBS. kami mengkhususkan diri dalam mengubah peristiwa menjadi momen tak terlupakan. Dengan bakat kreatif, perencanaan yang cermat, dan pelaksanaan yang sempurna, kami menciptakan pengalaman yang melampaui hal biasa, meninggalkan kesan mendalam pada setiap tamu."}
          </motion.p>

          <motion.p
            variants={slideInFromBottom(0.6)}
            className="text-md lg:text-xl px-12 lg:px-64 text-center"
          >
            {!bahasa
              ? "Specializing in the event organizer industry in Aceh. With a strong commitment to excellence, innovation, and professionalism, Mahaka Kreativa has established itself as a premier partner for companies and organizations seeking remarkable and successful event management solutions."
              : "Mengkhususkan diri dalam industri event organizer di Aceh. Dengan komitmen yang kuat terhadap keunggulan, inovasi, dan profesionalisme, Mahaka Kreativa telah menjadikan dirinya sebagai mitra utama bagi perusahaan dan organisasi yang mencari solusi manajemen acara yang luar biasa dan sukses."}
          </motion.p>

          <h1 className="text-4xl font-bold text-center pt-16 pb-8">
            Our Team
          </h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center pb-4"
          >
            <motion.div
              variants={slideInFromBottom(0.2)}
              className="w-[300px] h-[300px] overflow-hidden bg-gray-500"
            >
              <img
                src=" /images/team/Rais-Mukhayar.jpg"
                alt=""
                className="w-full"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center gap-4 pb-16"
          >
            {team.map((item, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom(`0.${index + 1}`)}
                className="w-[300px] h-[300px] overflow-hidden bg-gray-500"
              >
                <img src={item} alt="" className="w-full" />
              </motion.div>
            ))}
          </motion.div>

          {/* <h1 className="text-4xl font-bold text-center py-16">Office</h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-4 px-10 pb-12"
          >
            <motion.div
              variants={slideInFromBottom(0.1)}
              className="w-[450px] h-[300px] bg-gray-500"
            ></motion.div>
            <motion.div
              variants={slideInFromBottom(0.2)}
              className="w-[450px] h-[300px] bg-gray-500"
            ></motion.div>
          </motion.div> */}
          <img
            src="/images/background.jpg"
            alt=""
            className="absolute z-[-1] top-0 opacity-20"
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  bahasa: state.LanguageReducer.bahasa,
});

export default connect(mapStateToProps, null)(AboutUs);
