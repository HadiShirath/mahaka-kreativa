/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import {
  BudayaAcehTimur1,
  BudayaAcehTimur2,
  BudayaAcehTimur4,
  FL2SN1,
  FL2SN2,
  FL2SN3,
  FL2SN4,
  Groundbreaking1,
  Groundbreaking2,
  Groundbreaking3,
  Groundbreaking4,
  Hardikda1,
  Hardikda2,
  Hardikda3,
  Hardikda4,
  DanauLutTawar2,
  DanauLutTawar3,
  DanauLutTawar4,
  BahayaNarkoba1,
  BahayaNarkoba2,
  BahayaNarkoba3,
  BahayaNarkoba4,
  KuisKihajar2,
  KuisKihajar3,
  KuisKihajar4,
  O2SN1,
  O2SN2,
  O2SN3,
  O2SN4,
  PeresmianJalanTol1,
  PeresmianJalanTol2,
  PeresmianJalanTol3,
  PeresmianJalanTol4,
  AgamInong2,
  AgamInong3,
  AgamInong4,
  MuktamarIDI1,
  MuktamarIDI2,
  MuktamarIDI3,
  MuktamarIDI4,
  TDA2022_2,
  TDA2022_3,
  TDA2022_4,
  Barsela2,
  Barsela3,
  Barsela4,
  Mangrove2,
  Mangrove3,
  Mangrove4,
  TDA2023_2,
  TDA2023_3,
  TDA2023_4,
  Pupuk2,
  Pupuk3,
  Pupuk4,
  BSIGema1,
  BSIGema2,
  BSIGema3,
  BSIGema4,
  PKA8_1,
  PKA8_2,
  PKA8_3,
  PKA8_4,
  AdhiKS1,
  AdhiKS2,
  AdhiKS3,
  AdhiKS4,
} from "/public/images/index.js";

export default function OurGallery({ bahasa }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollInterval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth <
        container.scrollWidth
      ) {
        if (container.clientWidth > 1000) {
          container.scrollLeft += 300;
        } else {
          container.scrollLeft += container.offsetWidth;
        }
      } else {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 1500);
    return () => clearInterval(scrollInterval);
  }, []);

  const images = [
    BudayaAcehTimur1,
    BudayaAcehTimur2,
    BudayaAcehTimur4,
    FL2SN1,
    FL2SN2,
    FL2SN3,
    FL2SN4,
    Groundbreaking1,
    Groundbreaking2,
    Groundbreaking3,
    Groundbreaking4,
    Hardikda1,
    Hardikda2,
    Hardikda3,
    Hardikda4,
    DanauLutTawar2,
    DanauLutTawar3,
    DanauLutTawar4,
    BahayaNarkoba1,
    BahayaNarkoba2,
    BahayaNarkoba3,
    BahayaNarkoba4,
    KuisKihajar2,
    KuisKihajar3,
    KuisKihajar4,
    O2SN1,
    O2SN2,
    O2SN3,
    O2SN4,
    PeresmianJalanTol1,
    PeresmianJalanTol2,
    PeresmianJalanTol3,
    PeresmianJalanTol4,
    AgamInong2,
    AgamInong3,
    AgamInong4,
    MuktamarIDI1,
    MuktamarIDI2,
    MuktamarIDI3,
    MuktamarIDI4,
    TDA2022_2,
    TDA2022_3,
    TDA2022_4,
    Barsela2,
    Barsela3,
    Barsela4,
    Mangrove2,
    Mangrove3,
    Mangrove4,
    TDA2023_2,
    TDA2023_3,
    TDA2023_4,
    Pupuk2,
    Pupuk3,
    Pupuk4,
    BSIGema1,
    BSIGema2,
    BSIGema3,
    BSIGema4,
    PKA8_1,
    PKA8_2,
    PKA8_3,
    PKA8_4,
    AdhiKS1,
    AdhiKS2,
    AdhiKS3,
    AdhiKS4,
  ];

  var randomArray = [];
  for (var i = 0; i < 25; i++) {
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 68);
    } while (randomArray.includes(randomNumber));
    randomArray.push(randomNumber);
  }

  return (
    <div className="py-12 px-12 relative">
      <div className="absolute flex z-[-1] right-[-400px] top-[-300px] ">
        <img src="/images/glow.png" alt="" />
      </div>
      <div className="w-full justify-center flex flex-row items-end gap-2">
        <HiOutlineCamera size={40} className="text-orange" />
        <p className="text-gold font-semibold text-2xl">
          {!bahasa ? "Gallery" : "Galeri"}
        </p>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        {!bahasa ? "Memorable Moments With Us" : "Momen Berkesan Bersama Kami"}
      </h1>

      <div
        className="flex flex-row overflow-x-auto pt-12 scroll-smooth scrollbar-none"
        ref={containerRef}
      >
        {randomArray.length &&
          randomArray.map((item, index) => (
            <img
              src={images[item]}
              key={index}
              alt=""
              className="w-full md:w-80 md:h-50 px-4 md:px-2"
            />
          ))}
      </div>
    </div>
  );
}
