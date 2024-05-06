/* eslint-disable react/prop-types */
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { slideInFromBottom, sideBar } from "../utils/motion";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { changeBahasa } from "../action/languageAction.js";

function Navbar({ dispatch, bahasa }) {
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    Cookies.get("language")
      ? dispatch(changeBahasa(true))
      : dispatch(changeBahasa(false));
  }, [dispatch]);

  const menu = [
    {
      link: "/",
      menu: "Home",
    },
    {
      link: "/project",
      menu: "Project",
    },
    {
      link: "/about-us",
      menu: "About Us",
    },
  ];

  return (
    <nav className="flex w-full h-full">
      <div className="flex flex-row w-full relative justify-between items-center pt-10 px-8 lg:px-12 lg:pt-8">
        <a href="/">
          <img src="/images/logo-mahaka.png" alt="" className="h-14" />
        </a>
        <div className="hidden md:flex flex-row gap-12 lg:gap-24">
          {menu.map((item, index) => (
            <a href={item.link} key={index}>
              <h1 className="text-lg font-bold hover:before:scale-x-100 hover:before:origin-left-center relative before:w-full before:h-0.5 before:origin-left before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:bg-gold before:absolute before:left-0 before:bottom-0 py-1 cursor-pointer">
                {item.menu}
              </h1>
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-row gap-2 items-center sticky">
          <h1 className="mr-4 text-lg ">
            <span
              className={`${
                !bahasa ? "text-gold" : "text-white"
              } cursor-pointer font-bold`}
              onClick={() => {
                Cookies.remove("language");
                window.location.reload().then(() => {
                  dispatch(changeBahasa(false));
                });
              }}
            >
              EN
            </span>{" "}
            /{" "}
            <span
              className={`${bahasa && "text-gold"} cursor-pointer font-bold`}
              onClick={() => {
                Cookies.set("language", "indonesia", { expires: 1 });
                window.location.reload().then(() => {
                  dispatch(changeBahasa(true));
                });
              }}
            >
              IN
            </span>
          </h1>
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

        <div
          className={`flex md:hidden transition-transform transform ${
            open ? "rotate-45" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <HiMenuAlt3 size={30} />
        </div>
      </div>
      {open && (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="fixed md:hidden w-full h-full z-[20]"
        >
          <div className="w-full h-full" onClick={() => setOpen(!open)} />
          <motion.div
            variants={sideBar()}
            className="absolute pt-16 px-8 w-1/2 h-full shadow-gold shadow-xl right-0 top-0 bg-[#03001417] backdrop-blur-md"
          >
            <div className="flex justify-end" onClick={() => setOpen(!open)}>
              <MdClose size={30} />
            </div>
            <div className="flex flex-col items-center h-full justify-between py-12">
              <div className="flex flex-col gap-8">
                {menu.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    variants={slideInFromBottom(`0.${index + 1}`)}
                  >
                    <h1
                      className={`text-2xl font-semibold ${
                        pathname === item.link
                          ? "text-gold italic"
                          : "text-white"
                      }`}
                    >
                      {item.menu}
                    </h1>
                  </motion.a>
                ))}

                <motion.h1
                  variants={slideInFromBottom(0.5)}
                  className="text-2xl font-semibold"
                >
                  <span
                    className={`${
                      !bahasa ? "text-gold" : "text-white"
                    } cursor-pointer`}
                    onClick={() => {
                      Cookies.remove("language");
                      window.location.reload().then(() => {
                        setOpen(!open);
                        dispatch(changeBahasa(!bahasa));
                      });
                    }}
                  >
                    EN
                  </span>{" "}
                  /{" "}
                  <span
                    className={`${bahasa && "text-gold"} cursor-pointer`}
                    onClick={() => {
                      Cookies.set("language", "indonesia", { expires: 1 });
                      window.location.reload().then(() => {
                        setOpen(!open);
                        dispatch(changeBahasa(!bahasa));
                      });
                    }}
                  >
                    IN
                  </span>
                </motion.h1>
                <motion.div
                  variants={slideInFromBottom(0.7)}
                  className="flex gap-2"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=6282323896763"
                    target="_blank"
                    aria-label="Whatsapp"
                  >
                    <img
                      src="/images/whatsapp.png"
                      alt=""
                      className="h-[30px] w-auto hover:scale-125 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/maha.kreativa/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <img
                      src="/images/instagram.png"
                      alt=""
                      className="h-[30px] w-auto hover:scale-125 transition-all duration-300"
                    />
                  </a>
                </motion.div>
              </div>

              <motion.h1
                variants={slideInFromBottom(1)}
                className="text-md w-full py-2 text-white  text-center mb-8"
              >
                Mahaka Kreativa
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  bahasa: state.LanguageReducer.bahasa,
});

export default connect(mapStateToProps, null)(Navbar);
