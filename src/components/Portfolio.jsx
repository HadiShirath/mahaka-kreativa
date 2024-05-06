/* eslint-disable react/prop-types */
import { dataProject } from "../data/project.js";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

import ListPortfolio from "./atoms/ListPortfolio";
import ModalPortfolio from "./atoms/ModalPortfolio";

export default function Portfolio({ bahasa }) {
  const data = Object.values(dataProject)
    .map((item) => item.project)
    .flat();
  const dataNew = data.slice(-6).reverse();

  const [dataModal, setDataModal] = useState([]);
  const [valueImagesEvent, setvalueImagesEvent] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = (date, title, subtitle, photos) => {
    setModalIsOpen(!modalIsOpen);
    setDataModal([date, title, subtitle, photos]);
    setvalueImagesEvent(0);
  };

  return (
    <div className="py-12 relative">
      {modalIsOpen && (
        <ModalPortfolio
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          dataModal={dataModal}
          valueImagesEvent={valueImagesEvent}
          setvalueImagesEvent={setvalueImagesEvent}
        />
      )}

      <div className="w-full h-full">
        <h1 className="hidden md:flex absolute w-full font-bold text-[12rem] z-[-1] opacity-10 -top-4 justify-center text-center">
          Portfolio
        </h1>
      </div>

      <div className="w-full">
        <p className="text-gold font-semibold text-2xl text-center">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {!bahasa ? "Our Latest Project" : "Proyek Terbaru Kami"}
        </h1>

        <ListPortfolio dataNew={dataNew} toggle={toggle} />

        <a className="w-full flex justify-center" href="/project">
          <button className="flex border-gold border-[2px] px-6 py-2 rounded-2xl text-xl  items-center gap-2 text-gold">
            {!bahasa ? "View All Project" : "Lihat semua project"}
            <FaChevronRight />
          </button>
        </a>
      </div>
    </div>
  );
}
